__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "SomeClass",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 13
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 34,
                        "end": 38
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "otherProp",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 39,
                        "end": 48
                      },
                      "optional": false,
                      "computed": false,
                      "start": 34,
                      "end": 48
                    },
                    "right": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 51,
                      "end": 52
                    },
                    "start": 34,
                    "end": 52
                  },
                  "directive": null,
                  "start": 34,
                  "end": 53
                }
              ],
              "start": 28,
              "end": 55
            },
            "expression": false,
            "start": 16,
            "end": 55
          },
          "definite": false,
          "start": 4,
          "end": 55
        }
      ],
      "declare": false,
      "start": 0,
      "end": 56
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "SomeClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 62,
          "end": 71
        },
        "typeArguments": null,
        "arguments": [],
        "start": 58,
        "end": 73
      },
      "directive": null,
      "start": 58,
      "end": 74
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 75
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SomeClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 15
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 16,
        "end": 19
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 19
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "SomeClass",
            "optional": false,
            "typeAnnotation": null,
            "start": 20,
            "end": 29
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prop",
            "optional": false,
            "typeAnnotation": null,
            "start": 30,
            "end": 34
          },
          "optional": false,
          "computed": false,
          "start": 20,
          "end": 34
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 37,
          "end": 38
        },
        "start": 20,
        "end": 38
      },
      "directive": null,
      "start": 20,
      "end": 38
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 38
}
```
