__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 92,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 38,
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 38,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 20,
            "end": 36,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 27,
              "decorators": [],
              "name": "doThing",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 29,
              "end": 35,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 31,
                "end": 35
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "Foo",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 40,
      "end": 92,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 44,
          "end": 92,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 44,
            "end": 47,
            "decorators": [],
            "name": "cls",
            "optional": false
          },
          "init": {
            "type": "ClassExpression",
            "start": 50,
            "end": 92,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 71,
              "end": 92,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 77,
                  "end": 90,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 77,
                    "end": 84,
                    "decorators": [],
                    "name": "doThing",
                    "optional": false
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 84,
                    "end": 90,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 87,
                      "end": 90,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 67,
                "end": 70,
                "expression": {
                  "type": "Identifier",
                  "start": 67,
                  "end": 70,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false
                }
              }
            ],
            "superClass": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
