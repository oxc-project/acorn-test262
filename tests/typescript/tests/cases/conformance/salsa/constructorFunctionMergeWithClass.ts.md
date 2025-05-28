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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 55,
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
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 28,
              "end": 55,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 34,
                  "end": 53,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 34,
                    "end": 52,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 34,
                      "end": 48,
                      "object": {
                        "type": "ThisExpression",
                        "start": 34,
                        "end": 38
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 39,
                        "end": 48,
                        "decorators": [],
                        "name": "otherProp",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 51,
                      "end": 52,
                      "value": 0,
                      "raw": "0"
                    }
                  },
                  "directive": null
                }
              ]
            },
            "expression": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 58,
      "end": 74,
      "expression": {
        "type": "NewExpression",
        "start": 58,
        "end": 73,
        "callee": {
          "type": "Identifier",
          "start": 62,
          "end": 71,
          "decorators": [],
          "name": "SomeClass",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": []
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
  "end": 38,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 19,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 16,
        "end": 19,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 20,
      "end": 38,
      "expression": {
        "type": "AssignmentExpression",
        "start": 20,
        "end": 38,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 20,
          "end": 34,
          "object": {
            "type": "Identifier",
            "start": 20,
            "end": 29,
            "decorators": [],
            "name": "SomeClass",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 30,
            "end": 34,
            "decorators": [],
            "name": "prop",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 37,
          "end": 38,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
