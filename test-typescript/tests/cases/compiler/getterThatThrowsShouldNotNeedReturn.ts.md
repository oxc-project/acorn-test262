getterThatThrowsShouldNotNeedReturn.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 165,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 164,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 14,
        "end": 164,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 89,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 28,
              "end": 33,
              "decorators": [],
              "name": "greet",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 33,
              "end": 89,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 44,
                "end": 89,
                "body": [
                  {
                    "type": "ThrowStatement",
                    "start": 48,
                    "end": 57,
                    "argument": {
                      "type": "Literal",
                      "start": 54,
                      "end": 56,
                      "raw": "''",
                      "value": ""
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
                "start": 35,
                "end": 43,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 37,
                  "end": 43
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 91,
            "end": 162,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 98,
              "end": 106,
              "decorators": [],
              "name": "greeting",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 106,
              "end": 162,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 117,
                "end": 162,
                "body": [
                  {
                    "type": "ThrowStatement",
                    "start": 121,
                    "end": 130,
                    "argument": {
                      "type": "Literal",
                      "start": 127,
                      "end": 129,
                      "raw": "''",
                      "value": ""
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
                "start": 108,
                "end": 116,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 110,
                  "end": 116
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 13,
        "decorators": [],
        "name": "Greeter",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
