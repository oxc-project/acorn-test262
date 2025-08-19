__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 9
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 12,
              "end": 19
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "./exporter.mjs",
                "raw": "\"./exporter.mjs\"",
                "start": 20,
                "end": 36
              }
            ],
            "optional": false,
            "start": 12,
            "end": 37
          },
          "definite": false,
          "start": 6,
          "end": 37
        }
      ],
      "declare": false,
      "start": 0,
      "end": 38
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 43,
          "end": 46
        },
        "typeArguments": null,
        "arguments": [],
        "start": 39,
        "end": 48
      },
      "directive": null,
      "start": 39,
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
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 10
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./exporter.mjs",
          "raw": "\"./exporter.mjs\"",
          "start": 21,
          "end": 37
        },
        "start": 13,
        "end": 38
      },
      "importKind": "value",
      "start": 0,
      "end": 39
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 44,
          "end": 47
        },
        "typeArguments": null,
        "arguments": [],
        "start": 40,
        "end": 49
      },
      "directive": null,
      "start": 40,
      "end": 50
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo2",
            "optional": false,
            "typeAnnotation": null,
            "start": 59,
            "end": 63
          },
          "start": 59,
          "end": 63
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./exporter.mjs",
        "raw": "\"./exporter.mjs\"",
        "start": 69,
        "end": 85
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 52,
      "end": 86
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo2",
          "optional": false,
          "typeAnnotation": null,
          "start": 91,
          "end": 95
        },
        "typeArguments": null,
        "arguments": [],
        "start": 87,
        "end": 97
      },
      "directive": null,
      "start": 87,
      "end": 98
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo3",
            "optional": false,
            "typeAnnotation": null,
            "start": 112,
            "end": 116
          },
          "start": 107,
          "end": 116
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./exporter.mjs",
        "raw": "\"./exporter.mjs\"",
        "start": 122,
        "end": 138
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 100,
      "end": 139
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo3",
          "optional": false,
          "typeAnnotation": null,
          "start": 144,
          "end": 148
        },
        "typeArguments": null,
        "arguments": [],
        "start": 140,
        "end": 150
      },
      "directive": null,
      "start": 140,
      "end": 151
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Oops",
            "optional": false,
            "typeAnnotation": null,
            "start": 162,
            "end": 166
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Oops",
            "optional": false,
            "typeAnnotation": null,
            "start": 162,
            "end": 166
          },
          "importKind": "value",
          "start": 162,
          "end": 166
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./exporter.mjs",
        "raw": "\"./exporter.mjs\"",
        "start": 174,
        "end": 190
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 153,
      "end": 191
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 192
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 21,
          "end": 24
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 25,
          "end": 27
        },
        "abstract": false,
        "declare": false,
        "start": 15,
        "end": 27
      },
      "exportKind": "value",
      "start": 0,
      "end": 27
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
            "name": "oops",
            "optional": false,
            "typeAnnotation": null,
            "start": 34,
            "end": 38
          },
          "init": {
            "type": "Literal",
            "value": "oops",
            "raw": "\"oops\"",
            "start": 41,
            "end": 47
          },
          "definite": false,
          "start": 34,
          "end": 47
        }
      ],
      "declare": false,
      "start": 28,
      "end": 48
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
            "name": "oops",
            "optional": false,
            "typeAnnotation": null,
            "start": 58,
            "end": 62
          },
          "exported": {
            "type": "Literal",
            "value": "module.exports",
            "raw": "\"module.exports\"",
            "start": 66,
            "end": 82
          },
          "exportKind": "value",
          "start": 58,
          "end": 82
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 49,
      "end": 85
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 85
}
```
