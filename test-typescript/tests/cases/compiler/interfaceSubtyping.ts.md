__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 144,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 36,
      "body": {
        "type": "TSInterfaceBody",
        "start": 16,
        "end": 36,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 22,
            "end": 34,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 25,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 27,
              "end": 33,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 29,
                "end": 33
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
        "end": 15,
        "decorators": [],
        "name": "iface",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 37,
      "end": 143,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 66,
        "end": 143,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 72,
            "end": 112,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 72,
              "end": 83,
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
              "start": 84,
              "end": 112,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 105,
                "end": 112,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 85,
                  "end": 103,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 92,
                    "end": 103,
                    "decorators": [],
                    "name": "str",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 95,
                      "end": 103,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 97,
                        "end": 103
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 117,
            "end": 141,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 117,
              "end": 120,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 120,
              "end": 141,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 123,
                "end": 141,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 126,
                    "end": 137,
                    "argument": {
                      "type": "Literal",
                      "start": 133,
                      "end": 136,
                      "raw": "\"s\"",
                      "value": "s"
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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 49,
        "decorators": [],
        "name": "Camera",
        "optional": false
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 61,
          "end": 66,
          "expression": {
            "type": "Identifier",
            "start": 61,
            "end": 66,
            "decorators": [],
            "name": "iface",
            "optional": false
          }
        }
      ],
      "superClass": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
