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
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 9
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 19,
              "end": 22
            },
            "value": {
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "x",
                      "raw": "\"x\"",
                      "start": 34,
                      "end": 37
                    },
                    "start": 27,
                    "end": 38
                  }
                ],
                "start": 25,
                "end": 40
              },
              "expression": false,
              "start": 22,
              "end": 40
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 12,
            "end": 40
          }
        ],
        "start": 10,
        "end": 42
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 42
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null,
            "start": 48,
            "end": 51
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 54,
              "end": 57
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 59
            },
            "optional": false,
            "computed": false,
            "start": 54,
            "end": 59
          },
          "definite": false,
          "start": 48,
          "end": 59
        }
      ],
      "declare": false,
      "start": 44,
      "end": 60
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null,
            "start": 85,
            "end": 88
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "concat",
            "optional": false,
            "typeAnnotation": null,
            "start": 89,
            "end": 95
          },
          "optional": false,
          "computed": false,
          "start": 85,
          "end": 95
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "y",
            "raw": "\"y\"",
            "start": 96,
            "end": 99
          }
        ],
        "optional": false,
        "start": 85,
        "end": 100
      },
      "directive": null,
      "start": 85,
      "end": 101
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 146
}
```
