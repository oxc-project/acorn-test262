__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Hash",
            "optional": false,
            "typeAnnotation": null,
            "start": 13,
            "end": 17
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Hash",
            "optional": false,
            "typeAnnotation": null,
            "start": 13,
            "end": 17
          },
          "exportKind": "value",
          "start": 13,
          "end": 17
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "StringHash",
            "optional": false,
            "typeAnnotation": null,
            "start": 23,
            "end": 33
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "StringHash",
            "optional": false,
            "typeAnnotation": null,
            "start": 23,
            "end": 33
          },
          "exportKind": "value",
          "start": 23,
          "end": 33
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "StringHash2",
            "optional": false,
            "typeAnnotation": null,
            "start": 35,
            "end": 46
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "StringHash2",
            "optional": false,
            "typeAnnotation": null,
            "start": 35,
            "end": 46
          },
          "exportKind": "value",
          "start": 35,
          "end": 46
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 49
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Hash",
        "optional": false,
        "typeAnnotation": null,
        "start": 61,
        "end": 65
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 66,
              "end": 67
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 66,
            "end": 67
          }
        ],
        "start": 65,
        "end": 68
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 81,
                    "end": 87
                  },
                  "start": 79,
                  "end": 87
                },
                "start": 76,
                "end": 87
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 90,
                  "end": 91
                },
                "typeArguments": null,
                "start": 90,
                "end": 91
              },
              "start": 88,
              "end": 91
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 75,
            "end": 92
          }
        ],
        "start": 69,
        "end": 94
      },
      "declare": false,
      "start": 51,
      "end": 94
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StringHash",
        "optional": false,
        "typeAnnotation": null,
        "start": 101,
        "end": 111
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Hash",
          "optional": false,
          "typeAnnotation": null,
          "start": 114,
          "end": 118
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 119,
              "end": 125
            }
          ],
          "start": 118,
          "end": 126
        },
        "start": 114,
        "end": 126
      },
      "declare": false,
      "start": 96,
      "end": 127
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StringHash2",
        "optional": false,
        "typeAnnotation": null,
        "start": 139,
        "end": 150
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Hash",
            "optional": false,
            "typeAnnotation": null,
            "start": 159,
            "end": 163
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 164,
                "end": 170
              }
            ],
            "start": 163,
            "end": 171
          },
          "start": 159,
          "end": 171
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 172,
        "end": 174
      },
      "declare": false,
      "start": 129,
      "end": 174
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 174
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "StringHash",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 18
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "StringHash",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 18
          },
          "importKind": "value",
          "start": 8,
          "end": 18
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "StringHash2",
            "optional": false,
            "typeAnnotation": null,
            "start": 20,
            "end": 31
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "StringHash2",
            "optional": false,
            "typeAnnotation": null,
            "start": 20,
            "end": 31
          },
          "importKind": "value",
          "start": 20,
          "end": 31
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./b",
        "raw": "\"./b\"",
        "start": 38,
        "end": 43
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 44
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "doSome",
            "optional": false,
            "typeAnnotation": null,
            "start": 59,
            "end": 65
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "doSome",
            "optional": false,
            "typeAnnotation": null,
            "start": 59,
            "end": 65
          },
          "exportKind": "value",
          "start": 59,
          "end": 65
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 46,
      "end": 67
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "MAP",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "StringHash",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 80,
                  "end": 90
                },
                "typeArguments": null,
                "start": 80,
                "end": 90
              },
              "start": 78,
              "end": 90
            },
            "start": 75,
            "end": 90
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 99,
                  "end": 100
                },
                "value": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 102,
                  "end": 105
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 99,
                "end": 105
              }
            ],
            "start": 93,
            "end": 107
          },
          "definite": false,
          "start": 75,
          "end": 107
        }
      ],
      "declare": false,
      "start": 69,
      "end": 108
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "MAP2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "StringHash2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 122,
                  "end": 133
                },
                "typeArguments": null,
                "start": 122,
                "end": 133
              },
              "start": 120,
              "end": 133
            },
            "start": 116,
            "end": 133
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 142,
                  "end": 143
                },
                "value": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 145,
                  "end": 148
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 142,
                "end": 148
              }
            ],
            "start": 136,
            "end": 150
          },
          "definite": false,
          "start": 116,
          "end": 150
        }
      ],
      "declare": false,
      "start": 110,
      "end": 151
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "doSome",
        "optional": false,
        "typeAnnotation": null,
        "start": 162,
        "end": 168
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 175,
              "end": 181
            },
            "start": 173,
            "end": 181
          },
          "start": 169,
          "end": 181
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "arg2",
            "optional": false,
            "typeAnnotation": null,
            "start": 199,
            "end": 203
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "MAP",
            "optional": false,
            "typeAnnotation": null,
            "start": 206,
            "end": 209
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 199,
          "end": 209
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "arg3",
            "optional": false,
            "typeAnnotation": null,
            "start": 227,
            "end": 231
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "MAP2",
            "optional": false,
            "typeAnnotation": null,
            "start": 234,
            "end": 238
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 227,
          "end": 238
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 240,
        "end": 243
      },
      "expression": false,
      "start": 153,
      "end": 243
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 243
}
```
