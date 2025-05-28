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
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 25,
          "end": 29,
          "body": []
        },
        "abstract": false,
        "declare": false
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
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 61,
          "end": 65,
          "body": []
        },
        "expression": false
      },
      "exportKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 67,
      "end": 78,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 71,
          "end": 77,
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
            "value": 10,
            "raw": "10"
          },
          "definite": false
        }
      ],
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
      ],
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 25,
        "value": "./m1",
        "raw": "\"./m1\""
      },
      "phase": null,
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
          "decorators": [],
          "name": "Entity",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
