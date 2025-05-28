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
            "decorators": [],
            "name": "path",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
            "decorators": [],
            "name": "path",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 30,
            "end": 37,
            "decorators": [],
            "name": "resolve",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
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
        "optional": false
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
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 63,
          "end": 66,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 67,
          "end": 70,
          "body": []
        },
        "abstract": false,
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
            "decorators": [],
            "name": "path",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
            "decorators": [],
            "name": "path",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 35,
            "end": 42,
            "decorators": [],
            "name": "resolve",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
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
        "optional": false
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
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 68,
          "end": 72,
          "decorators": [],
          "name": "Foo2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 73,
          "end": 76,
          "body": []
        },
        "abstract": false,
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
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 19,
            "end": 26,
            "decorators": [],
            "name": "resolve",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
          "decorators": [],
          "name": "resolve",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
        "optional": false
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
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 74,
          "end": 78,
          "decorators": [],
          "name": "Foo3",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 79,
          "end": 82,
          "body": []
        },
        "abstract": false,
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
            "decorators": [],
            "name": "Bar",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 11,
            "decorators": [],
            "name": "Bar",
            "optional": false,
            "typeAnnotation": null
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
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 24,
            "end": 31,
            "decorators": [],
            "name": "resolve",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
          "decorators": [],
          "name": "resolve",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
        "optional": false
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
            "decorators": [],
            "name": "Bar",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 75,
            "end": 78,
            "decorators": [],
            "name": "Bar",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
