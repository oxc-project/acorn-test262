__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 208,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 55,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 10,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 10,
            "decorators": [],
            "name": "pkg",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 16,
        "end": 32,
        "value": "./package.json",
        "raw": "\"./package.json\""
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 40,
          "end": 52,
          "key": {
            "type": "Identifier",
            "start": 40,
            "end": 44,
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null
          },
          "value": {
            "type": "Literal",
            "start": 46,
            "end": 52,
            "value": "json",
            "raw": "\"json\""
          }
        }
      ],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 56,
      "end": 85,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 63,
        "end": 85,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 69,
            "end": 84,
            "id": {
              "type": "Identifier",
              "start": 69,
              "end": 73,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "MemberExpression",
              "start": 76,
              "end": 84,
              "object": {
                "type": "Identifier",
                "start": 76,
                "end": 79,
                "decorators": [],
                "name": "pkg",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 80,
                "end": 84,
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ImportDeclaration",
      "start": 86,
      "end": 145,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 93,
          "end": 100,
          "local": {
            "type": "Identifier",
            "start": 98,
            "end": 100,
            "decorators": [],
            "name": "ns",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 106,
        "end": 122,
        "value": "./package.json",
        "raw": "\"./package.json\""
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 130,
          "end": 142,
          "key": {
            "type": "Identifier",
            "start": 130,
            "end": 134,
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null
          },
          "value": {
            "type": "Literal",
            "start": 136,
            "end": 142,
            "value": "json",
            "raw": "\"json\""
          }
        }
      ],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 146,
      "end": 170,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 153,
        "end": 170,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 159,
            "end": 169,
            "id": {
              "type": "Identifier",
              "start": 159,
              "end": 164,
              "decorators": [],
              "name": "thing",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 167,
              "end": 169,
              "decorators": [],
              "name": "ns",
              "optional": false,
              "typeAnnotation": null
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 171,
      "end": 208,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 178,
        "end": 208,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 184,
            "end": 207,
            "id": {
              "type": "Identifier",
              "start": 184,
              "end": 189,
              "decorators": [],
              "name": "name2",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "MemberExpression",
              "start": 192,
              "end": 207,
              "object": {
                "type": "MemberExpression",
                "start": 192,
                "end": 202,
                "object": {
                  "type": "Identifier",
                  "start": 192,
                  "end": 194,
                  "decorators": [],
                  "name": "ns",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 195,
                  "end": 202,
                  "decorators": [],
                  "name": "default",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 203,
                "end": 207,
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
  "end": 164,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 33,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 10,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 10,
            "decorators": [],
            "name": "pkg",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 16,
        "end": 32,
        "value": "./package.json",
        "raw": "\"./package.json\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 34,
      "end": 63,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 41,
        "end": 63,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 47,
            "end": 62,
            "id": {
              "type": "Identifier",
              "start": 47,
              "end": 51,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "MemberExpression",
              "start": 54,
              "end": 62,
              "object": {
                "type": "Identifier",
                "start": 54,
                "end": 57,
                "decorators": [],
                "name": "pkg",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 58,
                "end": 62,
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ImportDeclaration",
      "start": 64,
      "end": 101,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 71,
          "end": 78,
          "local": {
            "type": "Identifier",
            "start": 76,
            "end": 78,
            "decorators": [],
            "name": "ns",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 84,
        "end": 100,
        "value": "./package.json",
        "raw": "\"./package.json\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 102,
      "end": 126,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 109,
        "end": 126,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 115,
            "end": 125,
            "id": {
              "type": "Identifier",
              "start": 115,
              "end": 120,
              "decorators": [],
              "name": "thing",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 123,
              "end": 125,
              "decorators": [],
              "name": "ns",
              "optional": false,
              "typeAnnotation": null
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 127,
      "end": 164,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 134,
        "end": 164,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 140,
            "end": 163,
            "id": {
              "type": "Identifier",
              "start": 140,
              "end": 145,
              "decorators": [],
              "name": "name2",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "MemberExpression",
              "start": 148,
              "end": 163,
              "object": {
                "type": "MemberExpression",
                "start": 148,
                "end": 158,
                "object": {
                  "type": "Identifier",
                  "start": 148,
                  "end": 150,
                  "decorators": [],
                  "name": "ns",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 151,
                  "end": 158,
                  "decorators": [],
                  "name": "default",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 159,
                "end": 163,
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
  "end": 208,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 55,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 10,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 10,
            "decorators": [],
            "name": "pkg",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 16,
        "end": 32,
        "value": "./package.json",
        "raw": "\"./package.json\""
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 40,
          "end": 52,
          "key": {
            "type": "Identifier",
            "start": 40,
            "end": 44,
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null
          },
          "value": {
            "type": "Literal",
            "start": 46,
            "end": 52,
            "value": "json",
            "raw": "\"json\""
          }
        }
      ],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 56,
      "end": 85,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 63,
        "end": 85,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 69,
            "end": 84,
            "id": {
              "type": "Identifier",
              "start": 69,
              "end": 73,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "MemberExpression",
              "start": 76,
              "end": 84,
              "object": {
                "type": "Identifier",
                "start": 76,
                "end": 79,
                "decorators": [],
                "name": "pkg",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 80,
                "end": 84,
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ImportDeclaration",
      "start": 86,
      "end": 145,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 93,
          "end": 100,
          "local": {
            "type": "Identifier",
            "start": 98,
            "end": 100,
            "decorators": [],
            "name": "ns",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 106,
        "end": 122,
        "value": "./package.json",
        "raw": "\"./package.json\""
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 130,
          "end": 142,
          "key": {
            "type": "Identifier",
            "start": 130,
            "end": 134,
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null
          },
          "value": {
            "type": "Literal",
            "start": 136,
            "end": 142,
            "value": "json",
            "raw": "\"json\""
          }
        }
      ],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 146,
      "end": 170,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 153,
        "end": 170,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 159,
            "end": 169,
            "id": {
              "type": "Identifier",
              "start": 159,
              "end": 164,
              "decorators": [],
              "name": "thing",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 167,
              "end": 169,
              "decorators": [],
              "name": "ns",
              "optional": false,
              "typeAnnotation": null
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 171,
      "end": 208,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 178,
        "end": 208,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 184,
            "end": 207,
            "id": {
              "type": "Identifier",
              "start": 184,
              "end": 189,
              "decorators": [],
              "name": "name2",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "MemberExpression",
              "start": 192,
              "end": 207,
              "object": {
                "type": "MemberExpression",
                "start": 192,
                "end": 202,
                "object": {
                  "type": "Identifier",
                  "start": 192,
                  "end": 194,
                  "decorators": [],
                  "name": "ns",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 195,
                  "end": 202,
                  "decorators": [],
                  "name": "default",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "property": {
                "type": "Identifier",
                "start": 203,
                "end": 207,
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
