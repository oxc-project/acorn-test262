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
        "id": {
          "type": "Identifier",
          "start": 21,
          "end": 24,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 25,
          "end": 29,
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
      "type": "ExportDefaultDeclaration",
      "start": 31,
      "end": 65,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 46,
        "end": 65,
        "id": {
          "type": "Identifier",
          "start": 55,
          "end": 58,
          "name": "bar",
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
          "start": 61,
          "end": 65,
          "body": []
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
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
          "id": {
            "type": "Identifier",
            "start": 71,
            "end": 72,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 75,
            "end": 77,
            "value": 10,
            "raw": "10"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 79,
      "end": 96,
      "declaration": {
        "type": "Identifier",
        "start": 94,
        "end": 95,
        "name": "x",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 13,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 13,
            "name": "Entity",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 25,
        "value": "./m1",
        "raw": "\"./m1\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 27,
      "end": 36,
      "expression": {
        "type": "CallExpression",
        "start": 27,
        "end": 35,
        "callee": {
          "type": "Identifier",
          "start": 27,
          "end": 33,
          "name": "Entity",
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
