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
            "name": "moduleB",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 19
          },
          "start": 7,
          "end": 19
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./file2",
        "raw": "\"./file2\"",
        "start": 25,
        "end": 34
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 34
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "use",
        "optional": false,
        "typeAnnotation": null,
        "start": 53,
        "end": 56
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 60,
              "end": 63
            },
            "start": 58,
            "end": 63
          },
          "start": 57,
          "end": 63
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 66,
          "end": 70
        },
        "start": 64,
        "end": 70
      },
      "body": null,
      "expression": false,
      "start": 36,
      "end": 71
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "use",
          "optional": false,
          "typeAnnotation": null,
          "start": 73,
          "end": 76
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "moduleB",
              "optional": false,
              "typeAnnotation": null,
              "start": 77,
              "end": 84
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 85,
              "end": 90
            },
            "optional": false,
            "computed": false,
            "start": 77,
            "end": 90
          }
        ],
        "optional": false,
        "start": 73,
        "end": 91
      },
      "directive": null,
      "start": 73,
      "end": 92
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "use",
          "optional": false,
          "typeAnnotation": null,
          "start": 93,
          "end": 96
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "moduleB",
              "optional": false,
              "typeAnnotation": null,
              "start": 97,
              "end": 104
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "moduleC",
              "optional": false,
              "typeAnnotation": null,
              "start": 105,
              "end": 112
            },
            "optional": false,
            "computed": false,
            "start": 97,
            "end": 112
          }
        ],
        "optional": false,
        "start": 93,
        "end": 113
      },
      "directive": null,
      "start": 93,
      "end": 114
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "use",
          "optional": false,
          "typeAnnotation": null,
          "start": 115,
          "end": 118
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "moduleB",
              "optional": false,
              "typeAnnotation": null,
              "start": 119,
              "end": 126
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "moduleCStar",
              "optional": false,
              "typeAnnotation": null,
              "start": 127,
              "end": 138
            },
            "optional": false,
            "computed": false,
            "start": 119,
            "end": 138
          }
        ],
        "optional": false,
        "start": 115,
        "end": 139
      },
      "directive": null,
      "start": 115,
      "end": 140
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 141
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
            "name": "moduleCStar",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 23
          },
          "start": 7,
          "end": 23
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./file3",
        "raw": "\"./file3\"",
        "start": 29,
        "end": 38
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 38
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "value2",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 53
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "value2",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 53
          },
          "importKind": "value",
          "start": 47,
          "end": 53
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./file4",
        "raw": "\"./file4\"",
        "start": 60,
        "end": 69
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 39,
      "end": 69
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "moduleC",
            "optional": false,
            "typeAnnotation": null,
            "start": 77,
            "end": 84
          },
          "start": 77,
          "end": 84
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./file3",
        "raw": "\"./file3\"",
        "start": 90,
        "end": 99
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 70,
      "end": 99
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 108,
            "end": 113
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 108,
            "end": 113
          },
          "importKind": "value",
          "start": 108,
          "end": 113
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./file3",
        "raw": "\"./file3\"",
        "start": 120,
        "end": 129
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 100,
      "end": 129
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
            "name": "moduleCStar",
            "optional": false,
            "typeAnnotation": null,
            "start": 144,
            "end": 155
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "moduleCStar",
            "optional": false,
            "typeAnnotation": null,
            "start": 144,
            "end": 155
          },
          "exportKind": "value",
          "start": 144,
          "end": 155
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "moduleC",
            "optional": false,
            "typeAnnotation": null,
            "start": 161,
            "end": 168
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "moduleC",
            "optional": false,
            "typeAnnotation": null,
            "start": 161,
            "end": 168
          },
          "exportKind": "value",
          "start": 161,
          "end": 168
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 174,
            "end": 179
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 174,
            "end": 179
          },
          "exportKind": "value",
          "start": 174,
          "end": 179
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 131,
      "end": 181
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 182
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 16
            },
            "init": {
              "type": "Literal",
              "value": "youpi",
              "raw": "\"youpi\"",
              "start": 19,
              "end": 26
            },
            "definite": false,
            "start": 11,
            "end": 26
          }
        ],
        "declare": false,
        "start": 7,
        "end": 27
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 27
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "value",
        "optional": false,
        "typeAnnotation": null,
        "start": 43,
        "end": 48
      },
      "exportKind": "value",
      "start": 28,
      "end": 49
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 50
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "value2",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 17
            },
            "init": {
              "type": "Literal",
              "value": "v",
              "raw": "\"v\"",
              "start": 20,
              "end": 23
            },
            "definite": false,
            "start": 11,
            "end": 23
          }
        ],
        "declare": false,
        "start": 7,
        "end": 24
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 24
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 24
}
```
