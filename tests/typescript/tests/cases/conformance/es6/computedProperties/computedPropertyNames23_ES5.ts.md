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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 96,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 45,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 17,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 17,
              "end": 45,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 50,
            "end": 94,
            "decorators": [],
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
                    "kind": "init",
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
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 76,
                      "end": 77,
                      "value": 1,
                      "raw": "1"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": true,
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
              "optional": false,
              "computed": true
            },
            "value": {
              "type": "FunctionExpression",
              "start": 88,
              "end": 94,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 91,
                "end": 94,
                "body": []
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
