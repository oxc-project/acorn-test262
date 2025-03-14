__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 234,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 140,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 140,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 37,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 28,
              "end": 32,
              "raw": "\"\\\"\"",
              "value": "\""
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 32,
              "end": 37,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 35,
                "end": 37,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 42,
            "end": 70,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 56,
              "end": 57,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 57,
              "end": 65,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 59,
                "end": 65
              }
            },
            "value": {
              "type": "Literal",
              "start": 68,
              "end": 69,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 75,
            "end": 103,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 89,
              "end": 90,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 90,
              "end": 98,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 92,
                "end": 98
              }
            },
            "value": {
              "type": "Literal",
              "start": 101,
              "end": 102,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 108,
            "end": 138,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 123,
              "end": 125,
              "decorators": [],
              "name": "_b",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 125,
              "end": 133,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 127,
                "end": 133
              }
            },
            "value": {
              "type": "Literal",
              "start": 136,
              "end": 137,
              "raw": "2",
              "value": 2
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 142,
      "end": 160,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 148,
          "end": 159,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 148,
            "end": 149,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 152,
            "end": 159,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 156,
              "end": 157,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 162,
      "end": 169,
      "expression": {
        "type": "MemberExpression",
        "start": 162,
        "end": 169,
        "computed": true,
        "object": {
          "type": "Identifier",
          "start": 162,
          "end": 163,
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Literal",
          "start": 164,
          "end": 168,
          "raw": "\"\\\"\"",
          "value": "\""
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 179,
      "end": 185,
      "expression": {
        "type": "MemberExpression",
        "start": 179,
        "end": 185,
        "computed": true,
        "object": {
          "type": "Identifier",
          "start": 179,
          "end": 180,
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Literal",
          "start": 181,
          "end": 184,
          "raw": "'y'",
          "value": "y"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 196,
      "end": 199,
      "expression": {
        "type": "MemberExpression",
        "start": 196,
        "end": 199,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 196,
          "end": 197,
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 198,
          "end": 199,
          "decorators": [],
          "name": "y",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 213,
      "end": 217,
      "expression": {
        "type": "MemberExpression",
        "start": 213,
        "end": 217,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 213,
          "end": 214,
          "decorators": [],
          "name": "A",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 215,
          "end": 217,
          "decorators": [],
          "name": "_b",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 230,
      "end": 233,
      "expression": {
        "type": "MemberExpression",
        "start": 230,
        "end": 233,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 230,
          "end": 231,
          "decorators": [],
          "name": "A",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 232,
          "end": 233,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
