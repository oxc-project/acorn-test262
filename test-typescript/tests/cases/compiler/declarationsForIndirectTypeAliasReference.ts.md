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
            "name": "Hash",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 13,
            "end": 17,
            "name": "Hash",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "name": "StringHash",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 23,
            "end": 33,
            "name": "StringHash",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "name": "StringHash2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 35,
            "end": 46,
            "name": "StringHash2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 51,
      "end": 94,
      "id": {
        "type": "Identifier",
        "start": 61,
        "end": 65,
        "name": "Hash",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
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
                "name": "key",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 79,
                  "end": 87,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 81,
                    "end": 87
                  }
                },
                "decorators": [],
                "optional": false
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
        "name": "StringHash",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
          "name": "Hash",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
        "name": "StringHash2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 159,
          "end": 171,
          "expression": {
            "type": "Identifier",
            "start": 159,
            "end": 163,
            "name": "Hash",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "typeParameters": null,
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
            "name": "StringHash",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 18,
            "name": "StringHash",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "name": "StringHash2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 20,
            "end": 31,
            "name": "StringHash2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "name": "doSome",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 59,
            "end": 65,
            "name": "doSome",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
          "id": {
            "type": "Identifier",
            "start": 75,
            "end": 90,
            "name": "MAP",
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
                  "name": "StringHash",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 99,
                  "end": 100,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 102,
                  "end": 105,
                  "value": "a",
                  "raw": "\"a\""
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 116,
            "end": 133,
            "name": "MAP2",
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
                  "name": "StringHash2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 142,
                  "end": 143,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 145,
                  "end": 148,
                  "value": "a",
                  "raw": "\"a\""
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
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
        "name": "doSome",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 169,
          "end": 181,
          "name": "arg1",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 173,
            "end": 181,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 175,
              "end": 181
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "AssignmentPattern",
          "start": 199,
          "end": 209,
          "left": {
            "type": "Identifier",
            "start": 199,
            "end": 203,
            "name": "arg2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 206,
            "end": 209,
            "name": "MAP",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "AssignmentPattern",
          "start": 227,
          "end": 238,
          "left": {
            "type": "Identifier",
            "start": 227,
            "end": 231,
            "name": "arg3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 234,
            "end": 238,
            "name": "MAP2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 240,
        "end": 243,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
