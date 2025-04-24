__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 271,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 79,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 23,
        "end": 79,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 77,
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
              "end": 77,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 49,
                "end": 77,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 59,
                    "end": 71,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 66,
                      "end": 70
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
      "start": 81,
      "end": 95,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 85,
          "end": 94,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 85,
            "end": 94,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 86,
              "end": 94,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 88,
                "end": 94
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
      "start": 96,
      "end": 131,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 128,
        "end": 131,
        "body": []
      },
      "left": {
        "type": "Identifier",
        "start": 101,
        "end": 102,
        "decorators": [],
        "name": "v",
        "optional": false,
        "typeAnnotation": null
      },
      "right": {
        "type": "NewExpression",
        "start": 106,
        "end": 126,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 110,
          "end": 126,
          "decorators": [],
          "name": "MyStringIterator",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    },
    {
      "type": "ForOfStatement",
      "start": 148,
      "end": 183,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 180,
        "end": 183,
        "body": []
      },
      "left": {
        "type": "Identifier",
        "start": 153,
        "end": 154,
        "decorators": [],
        "name": "v",
        "optional": false,
        "typeAnnotation": null
      },
      "right": {
        "type": "NewExpression",
        "start": 158,
        "end": 178,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 162,
          "end": 178,
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
