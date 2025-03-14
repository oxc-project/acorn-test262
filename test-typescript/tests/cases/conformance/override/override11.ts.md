override11.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 127,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 27,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 27,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 25,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 20,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 23,
              "end": 24,
              "raw": "1",
              "value": 1
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "Base",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 29,
      "end": 126,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 52,
        "end": 126,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 58,
            "end": 124,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 58,
              "end": 69,
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
              "start": 70,
              "end": 124,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 100,
                "end": 124,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 110,
                    "end": 118,
                    "expression": {
                      "type": "CallExpression",
                      "start": 110,
                      "end": 117,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 110,
                        "end": 115
                      },
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 71,
                  "end": 98,
                  "accessibility": "public",
                  "decorators": [],
                  "override": true,
                  "parameter": {
                    "type": "Identifier",
                    "start": 87,
                    "end": 98,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 90,
                      "end": 98,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 92,
                        "end": 98
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
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
        "start": 35,
        "end": 38,
        "decorators": [],
        "name": "Sub",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 47,
        "end": 51,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
