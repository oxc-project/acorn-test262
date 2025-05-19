__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 174,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 49,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 13,
          "end": 17,
          "exported": {
            "type": "Identifier",
            "start": 13,
            "end": 17,
            "decorators": [],
            "name": "Hash",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 13,
            "end": 17,
            "decorators": [],
            "name": "Hash",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ExportSpecifier",
          "start": 23,
          "end": 33,
          "exported": {
            "type": "Identifier",
            "start": 23,
            "end": 33,
            "decorators": [],
            "name": "StringHash",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 23,
            "end": 33,
            "decorators": [],
            "name": "StringHash",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ExportSpecifier",
          "start": 35,
          "end": 46,
          "exported": {
            "type": "Identifier",
            "start": 35,
            "end": 46,
            "decorators": [],
            "name": "StringHash2",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 35,
            "end": 46,
            "decorators": [],
            "name": "StringHash2",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 51,
      "end": 94,
      "body": {
        "type": "TSInterfaceBody",
        "start": 69,
        "end": 94,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 75,
            "end": 92,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 76,
                "end": 87,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 79,
                  "end": 87,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 81,
                    "end": 87
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 88,
              "end": 91,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 90,
                "end": 91,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 90,
                  "end": 91,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 61,
        "end": 65,
        "decorators": [],
        "name": "Hash",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 65,
        "end": 68,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 66,
            "end": 67,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 66,
              "end": 67,
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
      "type": "TSTypeAliasDeclaration",
      "start": 96,
      "end": 127,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 101,
        "end": 111,
        "decorators": [],
        "name": "StringHash",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 114,
        "end": 126,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 118,
          "end": 126,
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 119,
              "end": 125
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 114,
          "end": 118,
          "decorators": [],
          "name": "Hash",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 129,
      "end": 174,
      "body": {
        "type": "TSInterfaceBody",
        "start": 172,
        "end": 174,
        "body": []
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 159,
          "end": 171,
          "expression": {
            "type": "Identifier",
            "start": 159,
            "end": 163,
            "decorators": [],
            "name": "Hash",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 163,
            "end": 171,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 164,
                "end": 170
              }
            ]
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 139,
        "end": 150,
        "decorators": [],
        "name": "StringHash2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 243,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 44,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 38,
        "end": 43,
        "raw": "\"./b\"",
        "value": "./b"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 18,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 18,
            "decorators": [],
            "name": "StringHash",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 18,
            "decorators": [],
            "name": "StringHash",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 20,
          "end": 31,
          "imported": {
            "type": "Identifier",
            "start": 20,
            "end": 31,
            "decorators": [],
            "name": "StringHash2",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 20,
            "end": 31,
            "decorators": [],
            "name": "StringHash2",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 46,
      "end": 67,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 59,
          "end": 65,
          "exported": {
            "type": "Identifier",
            "start": 59,
            "end": 65,
            "decorators": [],
            "name": "doSome",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 59,
            "end": 65,
            "decorators": [],
            "name": "doSome",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 69,
      "end": 108,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 75,
          "end": 107,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 75,
            "end": 90,
            "decorators": [],
            "name": "MAP",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 78,
              "end": 90,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 80,
                "end": 90,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 80,
                  "end": 90,
                  "decorators": [],
                  "name": "StringHash",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 93,
            "end": 107,
            "properties": [
              {
                "type": "Property",
                "start": 99,
                "end": 105,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 99,
                  "end": 100,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 102,
                  "end": 105,
                  "raw": "\"a\"",
                  "value": "a"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 110,
      "end": 151,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 116,
          "end": 150,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 116,
            "end": 133,
            "decorators": [],
            "name": "MAP2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 120,
              "end": 133,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 122,
                "end": 133,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 122,
                  "end": 133,
                  "decorators": [],
                  "name": "StringHash2",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 136,
            "end": 150,
            "properties": [
              {
                "type": "Property",
                "start": 142,
                "end": 148,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 142,
                  "end": 143,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 145,
                  "end": 148,
                  "raw": "\"a\"",
                  "value": "a"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 153,
      "end": 243,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 240,
        "end": 243,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 162,
        "end": 168,
        "decorators": [],
        "name": "doSome",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 169,
          "end": 181,
          "decorators": [],
          "name": "arg1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 173,
            "end": 181,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 175,
              "end": 181
            }
          }
        },
        {
          "type": "AssignmentPattern",
          "start": 199,
          "end": 209,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 199,
            "end": 203,
            "decorators": [],
            "name": "arg2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "right": {
            "type": "Identifier",
            "start": 206,
            "end": 209,
            "decorators": [],
            "name": "MAP",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": null
        },
        {
          "type": "AssignmentPattern",
          "start": 227,
          "end": 238,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 227,
            "end": 231,
            "decorators": [],
            "name": "arg3",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "right": {
            "type": "Identifier",
            "start": 234,
            "end": 238,
            "decorators": [],
            "name": "MAP2",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
