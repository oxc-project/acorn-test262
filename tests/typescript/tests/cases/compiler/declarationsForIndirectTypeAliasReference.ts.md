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
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 13,
          "end": 17,
          "local": {
            "type": "Identifier",
            "start": 13,
            "end": 17,
            "decorators": [],
            "name": "Hash",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 13,
            "end": 17,
            "decorators": [],
            "name": "Hash",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 23,
          "end": 33,
          "local": {
            "type": "Identifier",
            "start": 23,
            "end": 33,
            "decorators": [],
            "name": "StringHash",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 23,
            "end": 33,
            "decorators": [],
            "name": "StringHash",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 35,
          "end": 46,
          "local": {
            "type": "Identifier",
            "start": 35,
            "end": 46,
            "decorators": [],
            "name": "StringHash2",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 35,
            "end": 46,
            "decorators": [],
            "name": "StringHash2",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 51,
      "end": 94,
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
            "name": {
              "type": "Identifier",
              "start": 66,
              "end": 67,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 69,
        "end": 94,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 75,
            "end": 92,
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 88,
              "end": 91,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 90,
                "end": 91,
                "typeName": {
                  "type": "Identifier",
                  "start": 90,
                  "end": 91,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 96,
      "end": 127,
      "id": {
        "type": "Identifier",
        "start": 101,
        "end": 111,
        "decorators": [],
        "name": "StringHash",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 114,
        "end": 126,
        "typeName": {
          "type": "Identifier",
          "start": 114,
          "end": 118,
          "decorators": [],
          "name": "Hash",
          "optional": false,
          "typeAnnotation": null
        },
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
        }
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 129,
      "end": 174,
      "id": {
        "type": "Identifier",
        "start": 139,
        "end": 150,
        "decorators": [],
        "name": "StringHash2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 172,
        "end": 174,
        "body": []
      },
      "declare": false
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
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 18,
            "decorators": [],
            "name": "StringHash",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
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
          "local": {
            "type": "Identifier",
            "start": 20,
            "end": 31,
            "decorators": [],
            "name": "StringHash2",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 38,
        "end": 43,
        "value": "./b",
        "raw": "\"./b\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 46,
      "end": 67,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 59,
          "end": 65,
          "local": {
            "type": "Identifier",
            "start": 59,
            "end": 65,
            "decorators": [],
            "name": "doSome",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 59,
            "end": 65,
            "decorators": [],
            "name": "doSome",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 69,
      "end": 108,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 75,
          "end": 107,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 80,
                  "end": 90,
                  "decorators": [],
                  "name": "StringHash",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 99,
                  "end": 100,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 102,
                  "end": 105,
                  "value": "a",
                  "raw": "\"a\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 110,
      "end": 151,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 116,
          "end": 150,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 122,
                  "end": 133,
                  "decorators": [],
                  "name": "StringHash2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 142,
                  "end": 143,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 145,
                  "end": 148,
                  "value": "a",
                  "raw": "\"a\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 153,
      "end": 243,
      "id": {
        "type": "Identifier",
        "start": 162,
        "end": 168,
        "decorators": [],
        "name": "doSome",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
          "right": {
            "type": "Identifier",
            "start": 206,
            "end": 209,
            "decorators": [],
            "name": "MAP",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
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
          "right": {
            "type": "Identifier",
            "start": 234,
            "end": 238,
            "decorators": [],
            "name": "MAP2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 240,
        "end": 243,
        "body": []
      },
      "expression": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
