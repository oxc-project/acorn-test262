typeArgumentInferenceWithClassExpression2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 172,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 67,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 42,
        "end": 67,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 48,
            "end": 65,
            "argument": {
              "type": "Identifier",
              "start": 55,
              "end": 64,
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
          "end": 37,
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
            "end": 37,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 26,
              "end": 37,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 28,
                  "end": 35,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 28,
                    "end": 32,
                    "decorators": [],
                    "name": "prop",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 32,
                    "end": 35,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 34,
                      "end": 35,
                      "typeName": {
                        "type": "Identifier",
                        "start": 34,
                        "end": 35,
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
        "start": 38,
        "end": 41,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 40,
          "end": 41,
          "typeName": {
            "type": "Identifier",
            "start": 40,
            "end": 41,
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
      "start": 128,
      "end": 172,
      "expression": {
        "type": "MemberExpression",
        "start": 128,
        "end": 171,
        "computed": false,
        "object": {
          "type": "CallExpression",
          "start": 128,
          "end": 164,
          "arguments": [
            {
              "type": "ClassExpression",
              "start": 132,
              "end": 163,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 138,
                "end": 163,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 140,
                    "end": 161,
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 147,
                      "end": 151,
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
                      "start": 154,
                      "end": 161,
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
            "start": 128,
            "end": 131,
            "decorators": [],
            "name": "foo",
            "optional": false
          },
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 165,
          "end": 171,
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
