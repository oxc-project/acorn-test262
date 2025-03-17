__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 22,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 22,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 21,
        "value": "path",
        "raw": "\"path\""
      },
      "kind": "module",
      "declare": true,
      "global": false
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
  "end": 70,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 24,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 11,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 11,
            "name": "path",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 17,
        "end": 23,
        "value": "path",
        "raw": "\"path\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 25,
      "end": 49,
      "expression": {
        "type": "CallExpression",
        "start": 25,
        "end": 48,
        "callee": {
          "type": "MemberExpression",
          "start": 25,
          "end": 37,
          "object": {
            "type": "Identifier",
            "start": 25,
            "end": 29,
            "name": "path",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 30,
            "end": 37,
            "name": "resolve",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 38,
            "end": 40,
            "value": "",
            "raw": "\"\""
          },
          {
            "type": "Literal",
            "start": 42,
            "end": 47,
            "value": "../",
            "raw": "\"../\""
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 50,
      "end": 70,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 57,
        "end": 70,
        "id": {
          "type": "Identifier",
          "start": 63,
          "end": 66,
          "name": "Foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 67,
          "end": 70,
          "body": []
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
  "end": 76,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 29,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 16,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 16,
            "name": "path",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 22,
        "end": 28,
        "value": "path",
        "raw": "\"path\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 30,
      "end": 54,
      "expression": {
        "type": "CallExpression",
        "start": 30,
        "end": 53,
        "callee": {
          "type": "MemberExpression",
          "start": 30,
          "end": 42,
          "object": {
            "type": "Identifier",
            "start": 30,
            "end": 34,
            "name": "path",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 35,
            "end": 42,
            "name": "resolve",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 43,
            "end": 45,
            "value": "",
            "raw": "\"\""
          },
          {
            "type": "Literal",
            "start": 47,
            "end": 52,
            "value": "../",
            "raw": "\"../\""
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 55,
      "end": 76,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 62,
        "end": 76,
        "id": {
          "type": "Identifier",
          "start": 68,
          "end": 72,
          "name": "Foo2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 73,
          "end": 76,
          "body": []
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
  "end": 82,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 40,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 26,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 15,
            "name": "default",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 19,
            "end": 26,
            "name": "resolve",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 33,
        "end": 39,
        "value": "path",
        "raw": "\"path\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 41,
      "end": 60,
      "expression": {
        "type": "CallExpression",
        "start": 41,
        "end": 59,
        "callee": {
          "type": "Identifier",
          "start": 41,
          "end": 48,
          "name": "resolve",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 49,
            "end": 51,
            "value": "",
            "raw": "\"\""
          },
          {
            "type": "Literal",
            "start": 53,
            "end": 58,
            "value": "../",
            "raw": "\"../\""
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 61,
      "end": 82,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 68,
        "end": 82,
        "id": {
          "type": "Identifier",
          "start": 74,
          "end": 78,
          "name": "Foo3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 79,
          "end": 82,
          "body": []
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
  "end": 80,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 45,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 11,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 11,
            "name": "Bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 11,
            "name": "Bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 13,
          "end": 31,
          "imported": {
            "type": "Identifier",
            "start": 13,
            "end": 20,
            "name": "default",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 24,
            "end": 31,
            "name": "resolve",
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
        "end": 44,
        "value": "path",
        "raw": "\"path\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 46,
      "end": 65,
      "expression": {
        "type": "CallExpression",
        "start": 46,
        "end": 64,
        "callee": {
          "type": "Identifier",
          "start": 46,
          "end": 53,
          "name": "resolve",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 54,
            "end": 56,
            "value": "",
            "raw": "\"\""
          },
          {
            "type": "Literal",
            "start": 58,
            "end": 63,
            "value": "../",
            "raw": "\"../\""
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 66,
      "end": 80,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 75,
          "end": 78,
          "local": {
            "type": "Identifier",
            "start": 75,
            "end": 78,
            "name": "Bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 75,
            "end": 78,
            "name": "Bar",
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
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
