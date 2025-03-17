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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 42,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 12,
            "end": 40,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 22,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 22,
              "end": 40,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "value": "x",
                      "raw": "\"x\""
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
          "id": {
            "type": "Identifier",
            "start": 48,
            "end": 51,
            "name": "baz",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 54,
            "end": 59,
            "object": {
              "type": "Identifier",
              "start": 54,
              "end": 57,
              "name": "Foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 58,
              "end": 59,
              "name": "b",
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
    },
    {
      "type": "ExpressionStatement",
      "start": 85,
      "end": 101,
      "expression": {
        "type": "CallExpression",
        "start": 85,
        "end": 100,
        "callee": {
          "type": "MemberExpression",
          "start": 85,
          "end": 95,
          "object": {
            "type": "Identifier",
            "start": 85,
            "end": 88,
            "name": "baz",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 89,
            "end": 95,
            "name": "concat",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 96,
            "end": 99,
            "value": "y",
            "raw": "\"y\""
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
