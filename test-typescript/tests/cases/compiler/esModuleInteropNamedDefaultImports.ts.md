__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 47,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 27,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 15,
        "end": 27,
        "id": {
          "type": "Identifier",
          "start": 21,
          "end": 24,
          "name": "Foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 25,
          "end": 27,
          "body": []
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 28,
      "end": 47,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 35,
        "end": 47,
        "id": {
          "type": "Identifier",
          "start": 41,
          "end": 44,
          "name": "Bar",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 45,
          "end": 47,
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
  "end": 157,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 24,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 10,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 10,
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 16,
        "end": 23,
        "value": "./mod",
        "raw": "\"./mod\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 25,
      "end": 65,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 34,
          "end": 49,
          "imported": {
            "type": "Identifier",
            "start": 34,
            "end": 41,
            "name": "default",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 45,
            "end": 49,
            "name": "Foo2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 57,
        "end": 64,
        "value": "./mod",
        "raw": "\"./mod\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 66,
      "end": 111,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 75,
          "end": 78,
          "imported": {
            "type": "Identifier",
            "start": 75,
            "end": 78,
            "name": "Bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 75,
            "end": 78,
            "name": "Bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 80,
          "end": 95,
          "imported": {
            "type": "Identifier",
            "start": 80,
            "end": 87,
            "name": "default",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 91,
            "end": 95,
            "name": "Foo3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 103,
        "end": 110,
        "value": "./mod",
        "raw": "\"./mod\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 112,
      "end": 122,
      "expression": {
        "type": "NewExpression",
        "start": 112,
        "end": 121,
        "callee": {
          "type": "Identifier",
          "start": 116,
          "end": 119,
          "name": "Foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 123,
      "end": 134,
      "expression": {
        "type": "NewExpression",
        "start": 123,
        "end": 133,
        "callee": {
          "type": "Identifier",
          "start": 127,
          "end": 131,
          "name": "Foo2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 135,
      "end": 145,
      "expression": {
        "type": "NewExpression",
        "start": 135,
        "end": 144,
        "callee": {
          "type": "Identifier",
          "start": 139,
          "end": 142,
          "name": "Bar",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 146,
      "end": 157,
      "expression": {
        "type": "NewExpression",
        "start": 146,
        "end": 156,
        "callee": {
          "type": "Identifier",
          "start": 150,
          "end": 154,
          "name": "Foo3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
