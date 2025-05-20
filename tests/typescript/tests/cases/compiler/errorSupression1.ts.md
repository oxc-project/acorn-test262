__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 146,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 42,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 42,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 12,
            "end": 40,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 22,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 22,
              "end": 40,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 25,
                "end": 40,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 27,
                    "end": 38,
                    "argument": {
                      "type": "Literal",
                      "start": 34,
                      "end": 37,
                      "raw": "\"x\"",
                      "value": "x"
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
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
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
    {
      "type": "VariableDeclaration",
      "start": 44,
      "end": 60,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 48,
          "end": 59,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 48,
            "end": 51,
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 54,
            "end": 59,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 54,
              "end": 57,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 58,
              "end": 59,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 85,
      "end": 101,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 85,
        "end": 100,
        "arguments": [
          {
            "type": "Literal",
            "start": 96,
            "end": 99,
            "raw": "\"y\"",
            "value": "y"
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 85,
          "end": 95,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 85,
            "end": 88,
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 89,
            "end": 95,
            "decorators": [],
            "name": "concat",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
