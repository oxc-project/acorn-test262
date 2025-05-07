__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 97,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 49,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 31,
        "end": 49,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 37,
            "end": 47,
            "argument": {
              "type": "Literal",
              "start": 44,
              "end": 46,
              "raw": "\"\"",
              "value": "",
              "regex": null,
              "bigint": null
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
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 16,
          "end": 20,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 17,
            "end": 20,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 19,
              "end": 20,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 19,
                "end": 20,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 22,
        "end": 30,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 24,
          "end": 30
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
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 51,
      "end": 97,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 59,
        "end": 97,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 65,
            "end": 95,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "CallExpression",
              "start": 66,
              "end": 75,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 73,
                  "end": 74,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 66,
                "end": 69,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 69,
                "end": 72,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 70,
                    "end": 71,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 70,
                      "end": 71,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 76,
              "end": 95,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 86,
                "end": 95,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 80,
                  "end": 84,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 81,
                    "end": 84,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 83,
                      "end": 84,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 83,
                        "end": 84,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 76,
                "end": 79,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 77,
                    "end": 78,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 77,
                      "end": 78,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 57,
        "end": 58,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
