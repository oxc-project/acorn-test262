__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 117,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 76,
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
        "end": 76,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 29,
            "end": 74,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 30,
              "end": 45,
              "object": {
                "type": "Identifier",
                "start": 30,
                "end": 36,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 37,
                "end": 45,
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
              "start": 46,
              "end": 74,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
      "start": 78,
      "end": 117,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 83,
        "end": 88,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 87,
            "end": 88,
            "id": {
              "type": "Identifier",
              "start": 87,
              "end": 88,
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
        "start": 92,
        "end": 112,
        "callee": {
          "type": "Identifier",
          "start": 96,
          "end": 112,
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
        "start": 114,
        "end": 117,
        "body": []
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
