__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 96,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 96,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 96,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 45,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 17,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 17,
              "end": 45,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 20,
                "end": 45,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 30,
                    "end": 39,
                    "argument": {
                      "type": "Literal",
                      "start": 37,
                      "end": 38,
                      "value": 0,
                      "raw": "0"
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
          },
          {
            "type": "MethodDefinition",
            "start": 50,
            "end": 94,
            "static": false,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 60,
              "end": 82,
              "object": {
                "type": "ObjectExpression",
                "start": 60,
                "end": 79,
                "properties": [
                  {
                    "type": "Property",
                    "start": 62,
                    "end": 77,
                    "method": false,
                    "shorthand": false,
                    "computed": true,
                    "key": {
                      "type": "CallExpression",
                      "start": 63,
                      "end": 73,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 63,
                        "end": 71,
                        "object": {
                          "type": "ThisExpression",
                          "start": 63,
                          "end": 67
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 68,
                          "end": 71,
                          "name": "bar",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 76,
                      "end": 77,
                      "value": 1,
                      "raw": "1"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              },
              "property": {
                "type": "Literal",
                "start": 80,
                "end": 81,
                "value": 0,
                "raw": "0"
              },
              "computed": true,
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 88,
              "end": 94,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 91,
                "end": 94,
                "body": []
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
