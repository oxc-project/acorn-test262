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
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 16,
        "end": 21,
        "raw": "\"./b\"",
        "value": "./b"
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 23,
      "end": 50,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 38,
        "end": 50,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 48,
          "end": 50,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 44,
          "end": 47,
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
      "type": "ExpressionStatement",
      "start": 51,
      "end": 57,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 51,
        "end": 56,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 51,
          "end": 54,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
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
  "end": 139,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 22,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 16,
        "end": 21,
        "raw": "\"./a\"",
        "value": "./a"
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
      "type": "ExportDefaultDeclaration",
      "start": 23,
      "end": 67,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 38,
        "end": 67,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 53,
          "end": 67,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 55,
              "end": 65,
              "directive": null,
              "expression": {
                "type": "NewExpression",
                "start": 55,
                "end": 64,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 59,
                  "end": 62,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 47,
          "end": 50,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 125,
      "end": 139,
      "directive": null,
      "expression": {
        "type": "ImportExpression",
        "start": 125,
        "end": 138,
        "options": null,
        "source": {
          "type": "Literal",
          "start": 132,
          "end": 137,
          "raw": "\"./a\"",
          "value": "./a"
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
