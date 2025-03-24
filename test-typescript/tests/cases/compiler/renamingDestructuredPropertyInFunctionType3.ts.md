__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 248,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 21,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 20,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "decorators": [],
            "name": "sym",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 12,
            "end": 20,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 12,
              "end": 18,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 22,
      "end": 54,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 28,
        "decorators": [],
        "name": "O",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 31,
        "end": 54,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 37,
          "end": 54,
          "params": [
            {
              "type": "TSSymbolKeyword",
              "start": 38,
              "end": 44
            },
            {
              "type": "TSUnknownKeyword",
              "start": 46,
              "end": 53
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 31,
          "end": 37,
          "decorators": [],
          "name": "Record",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 55,
      "end": 97,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 60,
        "end": 63,
        "decorators": [],
        "name": "F14",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 66,
        "end": 96,
        "params": [
          {
            "type": "ObjectPattern",
            "start": 67,
            "end": 87,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 69,
                "end": 82,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 70,
                  "end": 73,
                  "decorators": [],
                  "name": "sym",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 76,
                  "end": 82,
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 84,
              "end": 87,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 86,
                "end": 87,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 86,
                  "end": 87,
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 89,
          "end": 96,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 92,
            "end": 96
          }
        },
        "typeParameters": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 107,
      "end": 153,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 112,
        "end": 115,
        "decorators": [],
        "name": "G14",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConstructorType",
        "start": 118,
        "end": 152,
        "abstract": false,
        "params": [
          {
            "type": "ObjectPattern",
            "start": 123,
            "end": 143,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 125,
                "end": 138,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 126,
                  "end": 129,
                  "decorators": [],
                  "name": "sym",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 132,
                  "end": 138,
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 140,
              "end": 143,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 142,
                "end": 143,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 142,
                  "end": 143,
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 145,
          "end": 152,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 148,
            "end": 152
          }
        },
        "typeParameters": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 164,
      "end": 207,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 170,
          "end": 206,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 170,
            "end": 173,
            "decorators": [],
            "name": "f13",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 177,
            "end": 206,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 203,
              "end": 206,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 178,
                "end": 198,
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "start": 180,
                    "end": 193,
                    "computed": true,
                    "key": {
                      "type": "Identifier",
                      "start": 181,
                      "end": 184,
                      "decorators": [],
                      "name": "sym",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "start": 187,
                      "end": 193,
                      "decorators": [],
                      "name": "string",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 195,
                  "end": 198,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 197,
                    "end": 198,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 197,
                      "end": 198,
                      "decorators": [],
                      "name": "O",
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
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 208,
      "end": 247,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 244,
        "end": 247,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 217,
        "end": 220,
        "decorators": [],
        "name": "f14",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ObjectPattern",
          "start": 222,
          "end": 242,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 224,
              "end": 237,
              "computed": true,
              "key": {
                "type": "Identifier",
                "start": 225,
                "end": 228,
                "decorators": [],
                "name": "sym",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Identifier",
                "start": 231,
                "end": 237,
                "decorators": [],
                "name": "string",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 239,
            "end": 242,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 241,
              "end": 242,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 241,
                "end": 242,
                "decorators": [],
                "name": "O",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "EmptyStatement",
      "start": 247,
      "end": 248
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
