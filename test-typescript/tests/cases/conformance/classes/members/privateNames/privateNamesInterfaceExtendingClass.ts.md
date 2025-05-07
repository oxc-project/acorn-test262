__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 138,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 68,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 68,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 20,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 14,
              "end": 19,
              "name": "prop"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 25,
            "end": 66,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 29,
              "decorators": [],
              "name": "func",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 29,
              "end": 66,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 36,
                "end": 66,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 46,
                    "end": 60,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 46,
                      "end": 59,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 46,
                        "end": 53,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 46,
                          "end": 47,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 48,
                          "end": 53,
                          "name": "prop"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 56,
                        "end": 59,
                        "raw": "123",
                        "value": 123,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 30,
                  "end": 34,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 31,
                    "end": 34,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 33,
                      "end": 34,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 33,
                        "end": 34,
                        "decorators": [],
                        "name": "I",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 69,
      "end": 93,
      "body": {
        "type": "TSInterfaceBody",
        "start": 91,
        "end": 93,
        "body": []
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 89,
          "end": 90,
          "expression": {
            "type": "Identifier",
            "start": 89,
            "end": 90,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 79,
        "end": 80,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 95,
      "end": 137,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 115,
        "end": 137,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 121,
            "end": 135,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 121,
              "end": 134,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 121,
                "end": 128,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 121,
                  "end": 122,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "PrivateIdentifier",
                  "start": 123,
                  "end": 128,
                  "name": "prop"
                }
              },
              "right": {
                "type": "Literal",
                "start": 131,
                "end": 134,
                "raw": "123",
                "value": 123,
                "regex": null,
                "bigint": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 104,
        "end": 108,
        "decorators": [],
        "name": "func",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 109,
          "end": 113,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 110,
            "end": 113,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 112,
              "end": 113,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 112,
                "end": 113,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
