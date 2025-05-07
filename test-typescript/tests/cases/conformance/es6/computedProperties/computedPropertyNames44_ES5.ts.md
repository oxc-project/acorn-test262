__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 161,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 15,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 15,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 12,
            "end": 13,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 16,
      "end": 35,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 35,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 29,
            "end": 31,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 29,
              "end": 30,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 32,
            "end": 33,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 32,
              "end": 33,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 22,
        "end": 26,
        "decorators": [],
        "name": "Foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 37,
      "end": 109,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 45,
        "end": 109,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 51,
            "end": 69,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 52,
                "end": 61,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 53,
                  "end": 61,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 55,
                    "end": 61
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 62,
              "end": 68,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 64,
                "end": 68,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 64,
                  "end": 68,
                  "decorators": [],
                  "name": "Foo2",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 74,
            "end": 107,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 79,
              "end": 85,
              "raw": "\"get1\"",
              "value": "get1",
              "regex": null,
              "bigint": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 86,
              "end": 107,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 89,
                "end": 107,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 91,
                    "end": 105,
                    "argument": {
                      "type": "NewExpression",
                      "start": 98,
                      "end": 105,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 102,
                        "end": 105,
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
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
        "start": 43,
        "end": 44,
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
      "type": "ClassDeclaration",
      "start": 111,
      "end": 161,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 129,
        "end": 161,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 135,
            "end": 159,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 140,
              "end": 146,
              "raw": "\"set1\"",
              "value": "set1",
              "regex": null,
              "bigint": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 147,
              "end": 159,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 156,
                "end": 159,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 148,
                  "end": 154,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 149,
                    "end": 154,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 151,
                      "end": 154,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 151,
                        "end": 154,
                        "decorators": [],
                        "name": "Foo",
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
        "start": 117,
        "end": 118,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 127,
        "end": 128,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
