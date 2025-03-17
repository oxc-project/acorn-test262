__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 275,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 56,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 56,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 31,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 14,
              "end": 18,
              "name": "foo"
            },
            "value": {
              "type": "MemberExpression",
              "start": 21,
              "end": 30,
              "object": {
                "type": "ThisExpression",
                "start": 21,
                "end": 25
              },
              "property": {
                "type": "PrivateIdentifier",
                "start": 26,
                "end": 30,
                "name": "bar"
              },
              "computed": false,
              "optional": false
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 45,
            "end": 54,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 45,
              "end": 49,
              "name": "bar"
            },
            "value": {
              "type": "Literal",
              "start": 52,
              "end": 53,
              "value": 3,
              "raw": "3"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
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
    },
    {
      "type": "ClassDeclaration",
      "start": 58,
      "end": 131,
      "id": {
        "type": "Identifier",
        "start": 64,
        "end": 66,
        "name": "A2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 67,
        "end": 131,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 73,
            "end": 92,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 73,
              "end": 77,
              "name": "foo"
            },
            "value": {
              "type": "CallExpression",
              "start": 80,
              "end": 91,
              "callee": {
                "type": "MemberExpression",
                "start": 80,
                "end": 89,
                "object": {
                  "type": "ThisExpression",
                  "start": 80,
                  "end": 84
                },
                "property": {
                  "type": "PrivateIdentifier",
                  "start": 85,
                  "end": 89,
                  "name": "bar"
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 109,
            "end": 128,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 109,
              "end": 113,
              "name": "bar"
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 113,
              "end": 128,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 116,
                "end": 128,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 118,
                    "end": 126,
                    "argument": {
                      "type": "Literal",
                      "start": 125,
                      "end": 126,
                      "value": 3,
                      "raw": "3"
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
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 133,
      "end": 208,
      "id": {
        "type": "Identifier",
        "start": 139,
        "end": 141,
        "name": "A3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 142,
        "end": 208,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 148,
            "end": 165,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 148,
              "end": 152,
              "name": "foo"
            },
            "value": {
              "type": "MemberExpression",
              "start": 155,
              "end": 164,
              "object": {
                "type": "ThisExpression",
                "start": 155,
                "end": 159
              },
              "property": {
                "type": "PrivateIdentifier",
                "start": 160,
                "end": 164,
                "name": "bar"
              },
              "computed": false,
              "optional": false
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 182,
            "end": 205,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 186,
              "end": 190,
              "name": "bar"
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 190,
              "end": 205,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 193,
                "end": 205,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 195,
                    "end": 203,
                    "argument": {
                      "type": "Literal",
                      "start": 202,
                      "end": 203,
                      "value": 3,
                      "raw": "3"
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
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 210,
      "end": 274,
      "id": {
        "type": "Identifier",
        "start": 216,
        "end": 217,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 218,
        "end": 274,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 224,
            "end": 241,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 224,
              "end": 228,
              "name": "foo"
            },
            "value": {
              "type": "MemberExpression",
              "start": 231,
              "end": 240,
              "object": {
                "type": "ThisExpression",
                "start": 231,
                "end": 235
              },
              "property": {
                "type": "PrivateIdentifier",
                "start": 236,
                "end": 240,
                "name": "bar"
              },
              "computed": false,
              "optional": false
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 255,
            "end": 272,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 255,
              "end": 259,
              "name": "bar"
            },
            "value": {
              "type": "MemberExpression",
              "start": 262,
              "end": 271,
              "object": {
                "type": "ThisExpression",
                "start": 262,
                "end": 266
              },
              "property": {
                "type": "PrivateIdentifier",
                "start": 267,
                "end": 271,
                "name": "foo"
              },
              "computed": false,
              "optional": false
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
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
