__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 97,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 39,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
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
        "start": 15,
        "end": 39,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 21,
            "end": 37,
            "argument": {
              "type": "ObjectExpression",
              "start": 28,
              "end": 36,
              "properties": [
                {
                  "type": "Property",
                  "start": 30,
                  "end": 34,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 30,
                    "end": 31,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 33,
                    "end": 34,
                    "value": 0,
                    "raw": "0"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ForOfStatement",
      "start": 40,
      "end": 97,
      "await": false,
      "left": {
        "type": "MemberExpression",
        "start": 45,
        "end": 52,
        "object": {
          "type": "CallExpression",
          "start": 45,
          "end": 50,
          "callee": {
            "type": "Identifier",
            "start": 45,
            "end": 48,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [],
          "optional": false,
          "typeArguments": null
        },
        "property": {
          "type": "Identifier",
          "start": 51,
          "end": 52,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "right": {
        "type": "ArrayExpression",
        "start": 56,
        "end": 71,
        "elements": [
          {
            "type": "Literal",
            "start": 57,
            "end": 60,
            "value": "a",
            "raw": "'a'"
          },
          {
            "type": "Literal",
            "start": 62,
            "end": 65,
            "value": "b",
            "raw": "'b'"
          },
          {
            "type": "Literal",
            "start": 67,
            "end": 70,
            "value": "c",
            "raw": "'c'"
          }
        ]
      },
      "body": {
        "type": "BlockStatement",
        "start": 73,
        "end": 97,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 79,
            "end": 95,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 83,
                "end": 94,
                "id": {
                  "type": "Identifier",
                  "start": 83,
                  "end": 84,
                  "name": "p",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 87,
                  "end": 94,
                  "object": {
                    "type": "CallExpression",
                    "start": 87,
                    "end": 92,
                    "callee": {
                      "type": "Identifier",
                      "start": 87,
                      "end": 90,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 93,
                    "end": 94,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
