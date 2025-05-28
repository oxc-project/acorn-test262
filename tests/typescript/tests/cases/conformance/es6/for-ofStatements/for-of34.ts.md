__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 158,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 117,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 23,
        "end": 117,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 61,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 29,
              "end": 33,
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 33,
              "end": 61,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 36,
                "end": 61,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 46,
                    "end": 55,
                    "argument": {
                      "type": "Identifier",
                      "start": 53,
                      "end": 54,
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 67,
            "end": 115,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 68,
              "end": 83,
              "object": {
                "type": "Identifier",
                "start": 68,
                "end": 74,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 75,
                "end": 83,
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "value": {
              "type": "FunctionExpression",
              "start": 84,
              "end": 115,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 87,
                "end": 115,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 97,
                    "end": 109,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 104,
                      "end": 108
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ForOfStatement",
      "start": 119,
      "end": 158,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 124,
        "end": 129,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 128,
            "end": 129,
            "id": {
              "type": "Identifier",
              "start": 128,
              "end": 129,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "NewExpression",
        "start": 133,
        "end": 153,
        "callee": {
          "type": "Identifier",
          "start": 137,
          "end": 153,
          "decorators": [],
          "name": "MyStringIterator",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": []
      },
      "body": {
        "type": "BlockStatement",
        "start": 155,
        "end": 158,
        "body": []
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
