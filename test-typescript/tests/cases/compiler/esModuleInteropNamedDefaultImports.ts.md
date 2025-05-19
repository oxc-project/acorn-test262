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
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 25,
          "end": 27,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 21,
          "end": 24,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 28,
      "end": 47,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 35,
        "end": 47,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 45,
          "end": 47,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 41,
          "end": 44,
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 16,
        "end": 23,
        "raw": "\"./mod\"",
        "value": "./mod"
      },
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
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ImportDeclaration",
      "start": 25,
      "end": 65,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 57,
        "end": 64,
        "raw": "\"./mod\"",
        "value": "./mod"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 34,
          "end": 49,
          "imported": {
            "type": "Identifier",
            "start": 34,
            "end": 41,
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 45,
            "end": 49,
            "decorators": [],
            "name": "Foo2",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ImportDeclaration",
      "start": 66,
      "end": 111,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 103,
        "end": 110,
        "raw": "\"./mod\"",
        "value": "./mod"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 75,
          "end": 78,
          "imported": {
            "type": "Identifier",
            "start": 75,
            "end": 78,
            "decorators": [],
            "name": "Bar",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 75,
            "end": 78,
            "decorators": [],
            "name": "Bar",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 80,
          "end": 95,
          "imported": {
            "type": "Identifier",
            "start": 80,
            "end": 87,
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 91,
            "end": 95,
            "decorators": [],
            "name": "Foo3",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ExpressionStatement",
      "start": 112,
      "end": 122,
      "directive": null,
      "expression": {
        "type": "NewExpression",
        "start": 112,
        "end": 121,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 116,
          "end": 119,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 123,
      "end": 134,
      "directive": null,
      "expression": {
        "type": "NewExpression",
        "start": 123,
        "end": 133,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 127,
          "end": 131,
          "decorators": [],
          "name": "Foo2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 135,
      "end": 145,
      "directive": null,
      "expression": {
        "type": "NewExpression",
        "start": 135,
        "end": 144,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 139,
          "end": 142,
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 146,
      "end": 157,
      "directive": null,
      "expression": {
        "type": "NewExpression",
        "start": 146,
        "end": 156,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 150,
          "end": 154,
          "decorators": [],
          "name": "Foo3",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
