__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 133,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 16,
      "end": 92,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 39,
        "end": 92,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 45,
            "end": 90,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 46,
              "end": 61,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 46,
                "end": 52,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 53,
                "end": 61,
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 62,
              "end": 90,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 65,
                "end": 90,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 75,
                    "end": 84,
                    "argument": {
                      "type": "Identifier",
                      "start": 82,
                      "end": 83,
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null
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
        "start": 22,
        "end": 38,
        "decorators": [],
        "name": "MyStringIterator",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ForOfStatement",
      "start": 94,
      "end": 133,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 130,
        "end": 133,
        "body": []
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 99,
        "end": 104,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 103,
            "end": 104,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 103,
              "end": 104,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "right": {
        "type": "NewExpression",
        "start": 108,
        "end": 128,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 112,
          "end": 128,
          "decorators": [],
          "name": "MyStringIterator",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
