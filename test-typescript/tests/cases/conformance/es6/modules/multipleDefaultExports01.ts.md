__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 97,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 29,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 15,
        "end": 29,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 25,
          "end": 29,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 21,
          "end": 24,
          "decorators": [],
          "name": "foo",
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
      "type": "ExportDefaultDeclaration",
      "start": 31,
      "end": 65,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 46,
        "end": 65,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 61,
          "end": 65,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 55,
          "end": 58,
          "decorators": [],
          "name": "bar",
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
      "type": "VariableDeclaration",
      "start": 67,
      "end": 78,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 71,
          "end": 77,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 71,
            "end": 72,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 75,
            "end": 77,
            "raw": "10",
            "value": 10,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 79,
      "end": 96,
      "declaration": {
        "type": "Identifier",
        "start": 94,
        "end": 95,
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null
      },
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
  "end": 36,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 25,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 25,
        "raw": "\"./m1\"",
        "value": "./m1",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 13,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 13,
            "decorators": [],
            "name": "Entity",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 27,
      "end": 36,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 27,
        "end": 35,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 27,
          "end": 33,
          "decorators": [],
          "name": "Entity",
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
