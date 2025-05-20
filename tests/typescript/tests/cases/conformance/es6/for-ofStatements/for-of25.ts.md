__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 129,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 76,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 23,
        "end": 76,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 74,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 30,
              "end": 45,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 30,
                "end": 36,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 37,
                "end": 45,
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
              "start": 46,
              "end": 74,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 49,
                "end": 74,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 59,
                    "end": 68,
                    "argument": {
                      "type": "Identifier",
                      "start": 66,
                      "end": 67,
                      "decorators": [],
                      "name": "x",
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
        "start": 6,
        "end": 22,
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
      "type": "VariableDeclaration",
      "start": 78,
      "end": 89,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 82,
          "end": 88,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 82,
            "end": 88,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 83,
              "end": 88,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 85,
                "end": 88
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ForOfStatement",
      "start": 90,
      "end": 129,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 126,
        "end": 129,
        "body": []
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 95,
        "end": 100,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 99,
            "end": 100,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 99,
              "end": 100,
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
        "start": 104,
        "end": 124,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 108,
          "end": 124,
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
