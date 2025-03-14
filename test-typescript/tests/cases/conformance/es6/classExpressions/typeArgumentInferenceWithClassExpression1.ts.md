typeArgumentInferenceWithClassExpression1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 120,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 74,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 49,
        "end": 74,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 55,
            "end": 72,
            "argument": {
              "type": "Identifier",
              "start": 62,
              "end": 71,
              "decorators": [],
              "name": "undefined",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 16,
          "end": 44,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 16,
            "end": 17,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "optional": false,
          "right": {
            "type": "ClassExpression",
            "start": 20,
            "end": 44,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 26,
              "end": 44,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 28,
                  "end": 42,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 35,
                    "end": 39,
                    "decorators": [],
                    "name": "prop",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 39,
                    "end": 42,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 41,
                      "end": 42,
                      "typeName": {
                        "type": "Identifier",
                        "start": 41,
                        "end": 42,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  },
                  "value": null
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": null,
            "implements": [],
            "superClass": null
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 45,
        "end": 48,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 47,
          "end": 48,
          "typeName": {
            "type": "Identifier",
            "start": 47,
            "end": 48,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 12,
        "end": 15,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 14,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 76,
      "end": 120,
      "expression": {
        "type": "MemberExpression",
        "start": 76,
        "end": 119,
        "computed": false,
        "object": {
          "type": "CallExpression",
          "start": 76,
          "end": 112,
          "arguments": [
            {
              "type": "ClassExpression",
              "start": 80,
              "end": 111,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 86,
                "end": 111,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 88,
                    "end": 109,
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 95,
                      "end": 99,
                      "decorators": [],
                      "name": "prop",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": true,
                    "value": {
                      "type": "Literal",
                      "start": 102,
                      "end": 109,
                      "raw": "\"hello\"",
                      "value": "hello"
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": null,
              "implements": [],
              "superClass": null
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 76,
            "end": 79,
            "decorators": [],
            "name": "foo",
            "optional": false
          },
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 113,
          "end": 119,
          "decorators": [],
          "name": "length",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
