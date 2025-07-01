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
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 41,
          "end": 44
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 45,
          "end": 47
        },
        "abstract": false,
        "declare": false,
        "start": 35,
        "end": 47
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 28,
      "end": 47
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 47
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
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 10
          },
          "start": 7,
          "end": 10
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./mod",
        "raw": "\"./mod\"",
        "start": 16,
        "end": 23
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 24
    },
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
            "start": 34,
            "end": 41
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo2",
            "optional": false,
            "typeAnnotation": null,
            "start": 45,
            "end": 49
          },
          "importKind": "value",
          "start": 34,
          "end": 49
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./mod",
        "raw": "\"./mod\"",
        "start": 57,
        "end": 64
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 25,
      "end": 65
    },
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
            "start": 75,
            "end": 78
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 75,
            "end": 78
          },
          "importKind": "value",
          "start": 75,
          "end": 78
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 80,
            "end": 87
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo3",
            "optional": false,
            "typeAnnotation": null,
            "start": 91,
            "end": 95
          },
          "importKind": "value",
          "start": 80,
          "end": 95
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./mod",
        "raw": "\"./mod\"",
        "start": 103,
        "end": 110
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 66,
      "end": 111
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
          "start": 116,
          "end": 119
        },
        "typeArguments": null,
        "arguments": [],
        "start": 112,
        "end": 121
      },
      "directive": null,
      "start": 112,
      "end": 122
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
          "start": 127,
          "end": 131
        },
        "typeArguments": null,
        "arguments": [],
        "start": 123,
        "end": 133
      },
      "directive": null,
      "start": 123,
      "end": 134
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 139,
          "end": 142
        },
        "typeArguments": null,
        "arguments": [],
        "start": 135,
        "end": 144
      },
      "directive": null,
      "start": 135,
      "end": 145
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
          "start": 150,
          "end": 154
        },
        "typeArguments": null,
        "arguments": [],
        "start": 146,
        "end": 156
      },
      "directive": null,
      "start": 146,
      "end": 157
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 157
}
```
