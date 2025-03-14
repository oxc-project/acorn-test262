typeOfSuperCall.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 91,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 11,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 11,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 13,
      "end": 91,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 31,
        "end": 91,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 37,
            "end": 89,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 37,
              "end": 48,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 48,
              "end": 89,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 51,
                "end": 89,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 61,
                    "end": 83,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 65,
                        "end": 82,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 65,
                          "end": 72,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 66,
                            "end": 72,
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 68,
                              "end": 72
                            }
                          }
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 75,
                          "end": 82,
                          "arguments": [],
                          "callee": {
                            "type": "Super",
                            "start": 75,
                            "end": 80
                          },
                          "optional": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  }
                ]
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
      "id": {
        "type": "Identifier",
        "start": 19,
        "end": 20,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 29,
        "end": 30,
        "decorators": [],
        "name": "C",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
