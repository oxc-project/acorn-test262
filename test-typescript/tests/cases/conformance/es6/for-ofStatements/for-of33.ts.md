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
      "id": {
        "type": "Identifier",
        "start": 22,
        "end": 38,
        "name": "MyStringIterator",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 39,
        "end": 92,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 45,
            "end": 90,
            "static": false,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 46,
              "end": 61,
              "object": {
                "type": "Identifier",
                "start": 46,
                "end": 52,
                "name": "Symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 53,
                "end": 61,
                "name": "iterator",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 62,
              "end": 90,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "name": "v",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
      "type": "ForOfStatement",
      "start": 94,
      "end": 133,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 99,
        "end": 104,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 103,
            "end": 104,
            "id": {
              "type": "Identifier",
              "start": 103,
              "end": 104,
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "right": {
        "type": "NewExpression",
        "start": 108,
        "end": 128,
        "callee": {
          "type": "Identifier",
          "start": 112,
          "end": 128,
          "name": "MyStringIterator",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "typeArguments": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 130,
        "end": 133,
        "body": []
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
