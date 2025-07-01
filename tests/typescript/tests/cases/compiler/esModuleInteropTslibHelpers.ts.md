__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "path",
        "raw": "\"path\"",
        "start": 15,
        "end": 21
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 22
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 22
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
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "path",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 11
          },
          "start": 7,
          "end": 11
        }
      ],
      "source": {
        "type": "Literal",
        "value": "path",
        "raw": "\"path\"",
        "start": 17,
        "end": 23
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 24
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "path",
            "optional": false,
            "typeAnnotation": null,
            "start": 25,
            "end": 29
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "resolve",
            "optional": false,
            "typeAnnotation": null,
            "start": 30,
            "end": 37
          },
          "optional": false,
          "computed": false,
          "start": 25,
          "end": 37
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 38,
            "end": 40
          },
          {
            "type": "Literal",
            "value": "../",
            "raw": "\"../\"",
            "start": 42,
            "end": 47
          }
        ],
        "optional": false,
        "start": 25,
        "end": 48
      },
      "directive": null,
      "start": 25,
      "end": 49
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 63,
          "end": 66
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 67,
          "end": 70
        },
        "abstract": false,
        "declare": false,
        "start": 57,
        "end": 70
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 50,
      "end": 70
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 70
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
            "name": "path",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 16
          },
          "start": 7,
          "end": 16
        }
      ],
      "source": {
        "type": "Literal",
        "value": "path",
        "raw": "\"path\"",
        "start": 22,
        "end": 28
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 29
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "path",
            "optional": false,
            "typeAnnotation": null,
            "start": 30,
            "end": 34
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "resolve",
            "optional": false,
            "typeAnnotation": null,
            "start": 35,
            "end": 42
          },
          "optional": false,
          "computed": false,
          "start": 30,
          "end": 42
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 43,
            "end": 45
          },
          {
            "type": "Literal",
            "value": "../",
            "raw": "\"../\"",
            "start": 47,
            "end": 52
          }
        ],
        "optional": false,
        "start": 30,
        "end": 53
      },
      "directive": null,
      "start": 30,
      "end": 54
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo2",
          "optional": false,
          "typeAnnotation": null,
          "start": 68,
          "end": 72
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 73,
          "end": 76
        },
        "abstract": false,
        "declare": false,
        "start": 62,
        "end": 76
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 55,
      "end": 76
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 76
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
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 15
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "resolve",
            "optional": false,
            "typeAnnotation": null,
            "start": 19,
            "end": 26
          },
          "importKind": "value",
          "start": 8,
          "end": 26
        }
      ],
      "source": {
        "type": "Literal",
        "value": "path",
        "raw": "\"path\"",
        "start": 33,
        "end": 39
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 40
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "resolve",
          "optional": false,
          "typeAnnotation": null,
          "start": 41,
          "end": 48
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 49,
            "end": 51
          },
          {
            "type": "Literal",
            "value": "../",
            "raw": "\"../\"",
            "start": 53,
            "end": 58
          }
        ],
        "optional": false,
        "start": 41,
        "end": 59
      },
      "directive": null,
      "start": 41,
      "end": 60
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo3",
          "optional": false,
          "typeAnnotation": null,
          "start": 74,
          "end": 78
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 79,
          "end": 82
        },
        "abstract": false,
        "declare": false,
        "start": 68,
        "end": 82
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 61,
      "end": 82
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 82
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
            "name": "Bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 11
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 11
          },
          "importKind": "value",
          "start": 8,
          "end": 11
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 13,
            "end": 20
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "resolve",
            "optional": false,
            "typeAnnotation": null,
            "start": 24,
            "end": 31
          },
          "importKind": "value",
          "start": 13,
          "end": 31
        }
      ],
      "source": {
        "type": "Literal",
        "value": "path",
        "raw": "\"path\"",
        "start": 38,
        "end": 44
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 45
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "resolve",
          "optional": false,
          "typeAnnotation": null,
          "start": 46,
          "end": 53
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 54,
            "end": 56
          },
          {
            "type": "Literal",
            "value": "../",
            "raw": "\"../\"",
            "start": 58,
            "end": 63
          }
        ],
        "optional": false,
        "start": 46,
        "end": 64
      },
      "directive": null,
      "start": 46,
      "end": 65
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
            "name": "Bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 75,
            "end": 78
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 75,
            "end": 78
          },
          "exportKind": "value",
          "start": 75,
          "end": 78
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 66,
      "end": 80
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 80
}
```
