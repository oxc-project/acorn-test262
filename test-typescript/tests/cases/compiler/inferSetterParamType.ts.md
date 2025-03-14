inferSetterParamType.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 294,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 118,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 118,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 52,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 24,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 24,
              "end": 52,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 27,
                "end": 52,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 37,
                    "end": 46,
                    "argument": {
                      "type": "Literal",
                      "start": 44,
                      "end": 45,
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
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 57,
            "end": 116,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 61,
              "end": 64,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 64,
              "end": 116,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 68,
                "end": 116,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 65,
                  "end": 66,
                  "decorators": [],
                  "name": "n",
                  "optional": false
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
    },
    {
      "type": "ClassDeclaration",
      "start": 120,
      "end": 293,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 131,
        "end": 293,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 138,
            "end": 261,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 142,
              "end": 145,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 145,
              "end": 261,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 148,
                "end": 261,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 158,
                    "end": 167,
                    "argument": {
                      "type": "Literal",
                      "start": 165,
                      "end": 166,
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
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 266,
            "end": 291,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 270,
              "end": 273,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 273,
              "end": 291,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 284,
                "end": 291,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 274,
                  "end": 282,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 275,
                    "end": 282,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 276,
                      "end": 282
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
        "start": 126,
        "end": 130,
        "decorators": [],
        "name": "Foo2",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
