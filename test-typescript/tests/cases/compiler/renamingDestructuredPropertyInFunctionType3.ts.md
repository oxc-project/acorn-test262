__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 249,
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
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "name": "sym",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 12,
            "end": 20,
            "callee": {
              "type": "Identifier",
              "start": 12,
              "end": 18,
              "name": "Symbol",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 22,
      "end": 54,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 28,
        "name": "O",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 31,
        "end": 54,
        "typeName": {
          "type": "Identifier",
          "start": 31,
          "end": 37,
          "name": "Record",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 55,
      "end": 97,
      "id": {
        "type": "Identifier",
        "start": 60,
        "end": 63,
        "name": "F14",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 66,
        "end": 96,
        "typeParameters": null,
        "params": [
          {
            "type": "ObjectPattern",
            "start": 67,
            "end": 87,
            "properties": [
              {
                "type": "Property",
                "start": 69,
                "end": 82,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 70,
                  "end": 73,
                  "name": "sym",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 76,
                  "end": 82,
                  "name": "string",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 84,
              "end": 87,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 86,
                "end": 87,
                "typeName": {
                  "type": "Identifier",
                  "start": 86,
                  "end": 87,
                  "name": "O",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 107,
      "end": 153,
      "id": {
        "type": "Identifier",
        "start": 112,
        "end": 115,
        "name": "G14",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConstructorType",
        "start": 118,
        "end": 152,
        "abstract": false,
        "typeParameters": null,
        "params": [
          {
            "type": "ObjectPattern",
            "start": 123,
            "end": 143,
            "properties": [
              {
                "type": "Property",
                "start": 125,
                "end": 138,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 126,
                  "end": 129,
                  "name": "sym",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 132,
                  "end": 138,
                  "name": "string",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 140,
              "end": 143,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 142,
                "end": 143,
                "typeName": {
                  "type": "Identifier",
                  "start": 142,
                  "end": 143,
                  "name": "O",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
        }
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 170,
            "end": 173,
            "name": "f13",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 177,
            "end": 206,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 178,
                "end": 198,
                "properties": [
                  {
                    "type": "Property",
                    "start": 180,
                    "end": 193,
                    "method": false,
                    "shorthand": false,
                    "computed": true,
                    "key": {
                      "type": "Identifier",
                      "start": 181,
                      "end": 184,
                      "name": "sym",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 187,
                      "end": 193,
                      "name": "string",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 195,
                  "end": 198,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 197,
                    "end": 198,
                    "typeName": {
                      "type": "Identifier",
                      "start": 197,
                      "end": 198,
                      "name": "O",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 203,
              "end": 206,
              "body": []
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 208,
      "end": 247,
      "id": {
        "type": "Identifier",
        "start": 217,
        "end": 220,
        "name": "f14",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 222,
          "end": 242,
          "properties": [
            {
              "type": "Property",
              "start": 224,
              "end": 237,
              "method": false,
              "shorthand": false,
              "computed": true,
              "key": {
                "type": "Identifier",
                "start": 225,
                "end": 228,
                "name": "sym",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 231,
                "end": 237,
                "name": "string",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 239,
            "end": 242,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 241,
              "end": 242,
              "typeName": {
                "type": "Identifier",
                "start": 241,
                "end": 242,
                "name": "O",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 244,
        "end": 247,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
