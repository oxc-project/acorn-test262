__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 76,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 37,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 15,
        "end": 37,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 34,
          "end": 37,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 24,
          "end": 31,
          "decorators": [],
          "name": "MyClass",
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
      "start": 38,
      "end": 63,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 38,
        "end": 63,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 38,
          "end": 49,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 38,
            "end": 45,
            "decorators": [],
            "name": "MyClass",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 46,
            "end": 49,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ClassExpression",
          "start": 52,
          "end": 63,
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "start": 60,
            "end": 63,
            "body": []
          },
          "declare": false,
          "decorators": [],
          "id": {
            "type": "Identifier",
            "start": 58,
            "end": 59,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "implements": [],
          "superClass": null,
          "superTypeArguments": null,
          "typeParameters": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 64,
      "end": 75,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 64,
        "end": 75,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 64,
          "end": 71,
          "decorators": [],
          "name": "MyClass",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 72,
          "end": 75,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": null
        }
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
  "end": 55,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 20,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 15,
        "end": 20,
        "raw": "'./a'",
        "value": "./a"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 9,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 9,
            "decorators": [],
            "name": "MC",
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
      "start": 21,
      "end": 27,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 21,
        "end": 27,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 21,
          "end": 23,
          "decorators": [],
          "name": "MC",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 24,
          "end": 27,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 50,
      "end": 55,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 54,
          "end": 55,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 54,
            "end": 55,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
