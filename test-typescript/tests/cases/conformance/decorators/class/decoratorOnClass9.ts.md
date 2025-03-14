decoratorOnClass9.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 191,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 21,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 20,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 20,
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 20,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 23,
      "end": 33,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 31,
        "end": 33,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 29,
        "end": 30,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 91,
      "end": 191,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 114,
        "end": 191,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 120,
            "end": 133,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 127,
              "end": 128,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "Literal",
              "start": 131,
              "end": 132,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 138,
            "end": 153,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 145,
              "end": 146,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "MemberExpression",
              "start": 149,
              "end": 152,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 149,
                "end": 150,
                "decorators": [],
                "name": "B",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 151,
                "end": 152,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 158,
            "end": 189,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 158,
              "end": 159,
              "decorators": [],
              "name": "m",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 159,
              "end": 189,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 162,
                "end": 189,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 172,
                    "end": 183,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 179,
                      "end": 182,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 179,
                        "end": 180,
                        "decorators": [],
                        "name": "B",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 181,
                        "end": 182,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      }
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
          }
        ]
      },
      "declare": false,
      "decorators": [
        {
          "type": "Decorator",
          "start": 91,
          "end": 95,
          "expression": {
            "type": "Identifier",
            "start": 92,
            "end": 95,
            "decorators": [],
            "name": "dec",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 102,
        "end": 103,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 112,
        "end": 113,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
