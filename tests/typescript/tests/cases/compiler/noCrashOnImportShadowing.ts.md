__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "zzz",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 16
            },
            "init": {
              "type": "Literal",
              "value": 123,
              "raw": "123",
              "start": 19,
              "end": 22
            },
            "definite": false,
            "start": 13,
            "end": 22
          }
        ],
        "declare": false,
        "start": 7,
        "end": 23
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 23
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 24
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
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 13
          },
          "start": 7,
          "end": 13
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./b",
        "raw": "\"./b\"",
        "start": 19,
        "end": 24
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 25
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 37,
        "end": 38
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 45,
              "end": 46
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 48,
                "end": 54
              },
              "start": 46,
              "end": 54
            },
            "accessibility": null,
            "static": false,
            "start": 45,
            "end": 55
          }
        ],
        "start": 39,
        "end": 57
      },
      "declare": false,
      "start": 27,
      "end": 57
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 68,
                  "end": 69
                },
                "typeArguments": null,
                "start": 68,
                "end": 69
              },
              "start": 66,
              "end": 69
            },
            "start": 65,
            "end": 69
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 74,
                  "end": 75
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 77,
                  "end": 79
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 74,
                "end": 79
              }
            ],
            "start": 72,
            "end": 81
          },
          "definite": false,
          "start": 65,
          "end": 81
        }
      ],
      "declare": false,
      "start": 59,
      "end": 82
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null,
          "start": 83,
          "end": 84
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "zzz",
          "optional": false,
          "typeAnnotation": null,
          "start": 85,
          "end": 88
        },
        "optional": false,
        "computed": false,
        "start": 83,
        "end": 88
      },
      "directive": null,
      "start": 83,
      "end": 89
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
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 100,
            "end": 101
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 100,
            "end": 101
          },
          "exportKind": "value",
          "start": 100,
          "end": 101
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 91,
      "end": 104
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 105
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
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 10
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 10
          },
          "importKind": "value",
          "start": 9,
          "end": 10
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./a",
        "raw": "\"./a\"",
        "start": 18,
        "end": 23
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 24
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 35,
                  "end": 36
                },
                "typeArguments": null,
                "start": 35,
                "end": 36
              },
              "start": 33,
              "end": 36
            },
            "start": 32,
            "end": 36
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 41,
                  "end": 42
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 44,
                  "end": 46
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 41,
                "end": 46
              }
            ],
            "start": 39,
            "end": 48
          },
          "definite": false,
          "start": 32,
          "end": 48
        }
      ],
      "declare": false,
      "start": 26,
      "end": 49
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null,
          "start": 50,
          "end": 51
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "zzz",
          "optional": false,
          "typeAnnotation": null,
          "start": 52,
          "end": 55
        },
        "optional": false,
        "computed": false,
        "start": 50,
        "end": 55
      },
      "directive": null,
      "start": 50,
      "end": 56
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "OriginalB",
            "optional": false,
            "typeAnnotation": null,
            "start": 70,
            "end": 79
          },
          "start": 65,
          "end": 79
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./b",
        "raw": "\"./b\"",
        "start": 85,
        "end": 90
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 58,
      "end": 91
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "OriginalB",
          "optional": false,
          "typeAnnotation": null,
          "start": 92,
          "end": 101
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "zzz",
          "optional": false,
          "typeAnnotation": null,
          "start": 102,
          "end": 105
        },
        "optional": false,
        "computed": false,
        "start": 92,
        "end": 105
      },
      "directive": null,
      "start": 92,
      "end": 106
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
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OriginalB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 117,
                  "end": 126
                },
                "typeArguments": null,
                "start": 117,
                "end": 126
              },
              "start": 115,
              "end": 126
            },
            "start": 114,
            "end": 126
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 129,
            "end": 130
          },
          "definite": false,
          "start": 114,
          "end": 130
        }
      ],
      "declare": false,
      "start": 108,
      "end": 131
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 131
}
```
