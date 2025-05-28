__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 394,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 229,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 12,
        "decorators": [],
        "name": "Parent",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 13,
        "end": 229,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 19,
            "end": 28,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 19,
              "end": 23,
              "name": "foo"
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 26,
              "end": 27,
              "value": 3,
              "raw": "3"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 33,
            "end": 49,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 40,
              "end": 44,
              "name": "bar"
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 47,
              "end": 48,
              "value": 5,
              "raw": "5"
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 54,
            "end": 227,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 54,
              "end": 70,
              "decorators": [],
              "name": "accessChildProps",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 70,
              "end": 227,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 73,
                "end": 227,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 83,
                    "end": 100,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 83,
                      "end": 99,
                      "object": {
                        "type": "NewExpression",
                        "start": 83,
                        "end": 94,
                        "callee": {
                          "type": "Identifier",
                          "start": 87,
                          "end": 92,
                          "decorators": [],
                          "name": "Child",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": []
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 95,
                        "end": 99,
                        "name": "foo"
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 184,
                    "end": 195,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 184,
                      "end": 194,
                      "object": {
                        "type": "Identifier",
                        "start": 184,
                        "end": 189,
                        "decorators": [],
                        "name": "Child",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 190,
                        "end": 194,
                        "name": "bar"
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
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
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 231,
      "end": 394,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 237,
        "end": 242,
        "decorators": [],
        "name": "Child",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 251,
        "end": 257,
        "decorators": [],
        "name": "Parent",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 258,
        "end": 394,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 264,
            "end": 277,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 264,
              "end": 268,
              "name": "foo"
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 271,
              "end": 276,
              "value": "foo",
              "raw": "\"foo\""
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 367,
            "end": 380,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 367,
              "end": 371,
              "name": "bar"
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 374,
              "end": 379,
              "value": "bar",
              "raw": "\"bar\""
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
