staticGetterAndSetter.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 89,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 88,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 88,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 16,
            "end": 53,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 27,
              "end": 30,
              "decorators": [],
              "name": "Foo",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 30,
              "end": 53,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 40,
                "end": 53,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 42,
                    "end": 51,
                    "argument": {
                      "type": "Literal",
                      "start": 49,
                      "end": 50,
                      "raw": "0",
                      "value": 0
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 32,
                "end": 39,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 33,
                  "end": 39
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 58,
            "end": 86,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 69,
              "end": 72,
              "decorators": [],
              "name": "Foo",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 72,
              "end": 86,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 84,
                "end": 86,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 73,
                  "end": 82,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 74,
                    "end": 82,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 76,
                      "end": 82
                    }
                  }
                }
              ]
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
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
