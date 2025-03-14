autoAccessor6.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 127,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 33,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 33,
        "body": [
          {
            "type": "AccessorProperty",
            "start": 15,
            "end": 31,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 24,
              "end": 25,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 25,
              "end": 30,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 27,
                "end": 30
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 8,
        "decorators": [],
        "name": "C1",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 35,
      "end": 69,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 55,
        "end": 69,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 61,
            "end": 67,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 61,
              "end": 62,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 65,
              "end": 66,
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
        "start": 41,
        "end": 43,
        "decorators": [],
        "name": "C2",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 52,
        "end": 54,
        "decorators": [],
        "name": "C1",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 71,
      "end": 126,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 91,
        "end": 126,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 97,
            "end": 124,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 101,
              "end": 102,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 102,
              "end": 124,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 105,
                "end": 124,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 107,
                    "end": 122,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 114,
                      "end": 121,
                      "computed": false,
                      "object": {
                        "type": "Super",
                        "start": 114,
                        "end": 119
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 120,
                        "end": 121,
                        "decorators": [],
                        "name": "a",
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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 77,
        "end": 79,
        "decorators": [],
        "name": "C3",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 88,
        "end": 90,
        "decorators": [],
        "name": "C1",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
