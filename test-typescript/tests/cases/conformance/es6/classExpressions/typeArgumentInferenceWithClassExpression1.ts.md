__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 16,
          "end": 44,
          "left": {
            "type": "Identifier",
            "start": 16,
            "end": 17,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "ClassExpression",
            "start": 20,
            "end": 44,
            "id": null,
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 26,
              "end": 44,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 28,
                  "end": 42,
                  "static": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 35,
                    "end": 39,
                    "name": "prop",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
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
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
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
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 12,
        "end": 15,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 14,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
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
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
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
        "object": {
          "type": "CallExpression",
          "start": 76,
          "end": 112,
          "callee": {
            "type": "Identifier",
            "start": 76,
            "end": 79,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [
            {
              "type": "ClassExpression",
              "start": 80,
              "end": 111,
              "id": null,
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 86,
                "end": 111,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 88,
                    "end": 109,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 95,
                      "end": 99,
                      "name": "prop",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 102,
                      "end": 109,
                      "value": "hello",
                      "raw": "\"hello\""
                    },
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": null,
                    "accessibility": null
                  }
                ]
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            }
          ],
          "optional": false,
          "typeArguments": null
        },
        "property": {
          "type": "Identifier",
          "start": 113,
          "end": 119,
          "name": "length",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
