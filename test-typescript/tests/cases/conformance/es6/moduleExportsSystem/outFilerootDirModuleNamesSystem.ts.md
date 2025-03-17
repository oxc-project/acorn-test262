__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 58,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 22,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 10,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 10,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 16,
        "end": 21,
        "value": "./b",
        "raw": "\"./b\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 23,
      "end": 50,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 38,
        "end": 50,
        "id": {
          "type": "Identifier",
          "start": 44,
          "end": 47,
          "name": "Foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 48,
          "end": 50,
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
      "type": "ExpressionStatement",
      "start": 51,
      "end": 57,
      "expression": {
        "type": "CallExpression",
        "start": 51,
        "end": 56,
        "callee": {
          "type": "Identifier",
          "start": 51,
          "end": 54,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
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
  "end": 140,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 22,
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
        "end": 21,
        "value": "./a",
        "raw": "\"./a\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 23,
      "end": 67,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 38,
        "end": 67,
        "id": {
          "type": "Identifier",
          "start": 47,
          "end": 50,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
        "body": {
          "type": "BlockStatement",
          "start": 53,
          "end": 67,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 55,
              "end": 65,
              "expression": {
                "type": "NewExpression",
                "start": 55,
                "end": 64,
                "callee": {
                  "type": "Identifier",
                  "start": 59,
                  "end": 62,
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              },
              "directive": null
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "exportKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 125,
      "end": 139,
      "expression": {
        "type": "ImportExpression",
        "start": 125,
        "end": 138,
        "source": {
          "type": "Literal",
          "start": 132,
          "end": 137,
          "value": "./a",
          "raw": "\"./a\""
        },
        "options": null
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
