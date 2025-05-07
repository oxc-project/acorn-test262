__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 85,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 65,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 65,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 13,
            "end": 26,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 24,
              "end": 25,
              "raw": "3",
              "value": 3,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 28,
            "end": 62,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 35,
              "end": 38,
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
              "start": 38,
              "end": 62,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 41,
                "end": 62,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 45,
                    "end": 59,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 52,
                      "end": 58,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 52,
                        "end": 56
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 57,
                        "end": 58,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
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
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "foo",
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
      "start": 67,
      "end": 85,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 71,
          "end": 84,
          "definite": false,
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
            "type": "CallExpression",
            "start": 75,
            "end": 84,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 75,
              "end": 82,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 75,
                "end": 78,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 79,
                "end": 82,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
