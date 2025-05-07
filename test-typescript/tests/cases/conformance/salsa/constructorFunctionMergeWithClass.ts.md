__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 75,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 56,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 55,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 13,
            "decorators": [],
            "name": "SomeClass",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 16,
            "end": 55,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 28,
              "end": 55,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 34,
                  "end": 53,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 34,
                    "end": 52,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 34,
                      "end": 48,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 34,
                        "end": 38
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 39,
                        "end": 48,
                        "decorators": [],
                        "name": "otherProp",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "start": 51,
                      "end": 52,
                      "raw": "0",
                      "value": 0,
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 58,
      "end": 74,
      "directive": null,
      "expression": {
        "type": "NewExpression",
        "start": 58,
        "end": 73,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 62,
          "end": 71,
          "decorators": [],
          "name": "SomeClass",
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 38,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 19,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 16,
        "end": 19,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 15,
        "decorators": [],
        "name": "SomeClass",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 20,
      "end": 38,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 20,
        "end": 38,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 20,
          "end": 34,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 20,
            "end": 29,
            "decorators": [],
            "name": "SomeClass",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 30,
            "end": 34,
            "decorators": [],
            "name": "prop",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 37,
          "end": 38,
          "raw": "0",
          "value": 0,
          "regex": null,
          "bigint": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
